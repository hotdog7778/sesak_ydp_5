const dotenv = require('dotenv');
dotenv.config();
const { PORT, REDIS_HOST, REDIS_PORT, SESSION_KEY } = process.env;
const express = require('express');
const session = require('express-session');
const app = express();
// redis 버전 7에서 commonJS 형식
const redis = require('redis');
const RedisStore = require('connect-redis').default;

// main APP
async function main() {
  const redisClient = await redis
    .createClient({
      // 목적지 레디스 서버에 대한 정보를 적지 않으면 기본값으로 localhost 6379포트로 연결
      url: `redis://@${REDIS_HOST}:${REDIS_PORT}`,

      // 그외 목적지 레디스 서버 정보는
      // format : redis[s]://[[username][:password]@][host][:port][/db-number]
      // createClient({
      // url: 'redis://alice:foobared@awesome.redis.server:6380'
      // });
    })
    .on('connect', () => console.log('Initiating a connection to the server	'))
    .on('ready', () => {
      console.log('Client is ready to use');
    })
    .on('end', () => {
      console.log('Connection has been closed');
    })
    .on('error', (err) => console.log('Redis Client Error', err))
    .on('reconnecting', () => {
      console.log('Client is trying to reconnect to the server	');
    })
    .connect();

  //// redis에서 키, 밸류 가져오기
  // const value = await redisClient.get('key');

  //// redis에 키, 밸류 저장하기
  // await redisClient.set('key', 'value');

  // await redisClient.set('key', 'value', {
  //   EX: 10,
  //   NX: true
  //});

  //// 트랜잭션(Multi/Exec)
  // .multi()를 호출하여 트랜잭션을 시작한 다음 명령을 연결합니다.
  // 완료되면 .exec()를 호출하면 결과가 포함된 배열이 반환됩니다.
  // 그니까 set 과 get을 함께한다. -> set 과 get의 결과를 배열로 한번에 받는다
  // await client.set('another-key', 'another-value');
  // const [setKeyReply, otherKeyValue] = await client
  //   .multi()
  //   .set('key', 'value')
  //   .get('another-key')
  //   .exec(); // ['OK', 'another-value']

  //// 연결 끊기 quit()
  // 서버에 QUIT 명령을 전송하여 Redis에 대한 클라이언트 연결을 정상적으로 종료합니다.
  // 종료하기 전에 클라이언트는 대기열에 남아 있는 모든 명령을 실행하고 각 명령에 대해 Redis로부터 응답을 받습니다.

  // 비동기 처리
  // const [ping, get, quit] = await Promise.all([
  //   client.ping(),
  //   client.get('key'),
  //   client.quit()
  // ]); // ['PONG', null, 'OK']

  // 비동기 처리 및 에러시 처리까지
  // try {
  //   await client.get('key');
  // } catch (err) {
  //   // ClosedClient Error
  // }

  //// 연결 끊기 disconnect()
  // await redisClient.disconnect();

  let redisStore = new RedisStore({
    client: redisClient,
    // prefix: 'myapp:',
  });

  app.use(
    session({
      secret: SESSION_KEY,
      // resave 옵션은
      // 모든 request마다 기존에 있던 session에 아무런 변경사항이 없을 시에도
      // 그 session을 다시 저장하는 옵션입니다.
      // (매 request 마다 세션을 계속 다시 저장하는 것)
      resave: false, // 필수옵션 : 경량 세션을 강제로 활성화
      // 변경사항도 없는 session이 매번 다시 저장되는 걸 막음

      // saveUninitialized는 request가 들어오면 해당 request에서 새로 생성된 session에 아무런 작업이 이루어지지 않은 상황
      saveUninitialized: false, // 권장사항: 데이터가 존재할 때만 세션을 저장
      // true 라면 아무 내용 없는 session이 계속해서 저장될 수 있음

      cookie: {
        // document.cookie와 같은 자바스크립트로 쿠키를 조회하는 것을 막는 옵션
        // 브라우저에서 HTTP Only가 설정된 쿠키를 조회할 수 없다.
        // 서버로 HTTP Request 요청을 보낼때만 쿠키를 전송한다.
        // 이를 통해 XSS(Cross Site Scripting) 공격을 차단할 수 있다.
        httpOnly: true,
        maxAge: 60 * 60000, // 1h
      },
      store: redisStore,
    })
  );

  app.set('view engine', 'ejs');
  app.use('/views', express.static(__dirname + '/views'));
  app.use('/static', express.static(__dirname + '/static'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // 레디스 연결을 확인 및 재연결 시도하는 미들웨어
  app.use((req, res, next) => {
    // if (!redisClient.connected) {
    if (!redisClient.connect) {
      redisClient.connect();
    }
    next();
  });

  const router = require('./routes/user');
  app.use('/', router);

  // TODO: 404 에러 처리
  app.get('*', (req, res) => {
    res.render('404');
  });

  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
}

main();
