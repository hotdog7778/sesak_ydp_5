//module
const express = require('express');
const app = express();

//ejs
app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));

//json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// (임시) DB로부터 받아온 댓글 목록
const comments = [
  {
    id: 1,
    userid: 'helloworld',
    date: '2022-10-31',
    comment: '안녕하세요^~^',
  },
  {
    id: 2,
    userid: 'happy',
    date: '2022-11-01',
    comment: '반가워유',
  },
  {
    id: 3,
    userid: 'lucky',
    date: '2022-11-02',
    comment: '오 신기하군',
  },
  {
    id: 4,
    userid: 'bestpart',
    date: '2022-11-02',
    comment: '첫 댓글입니당ㅎㅎ',
  },
];

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/comments', (req, res) => {
  res.render('comments', {
    comments: comments,
  });
  //json 그대로 넘기기
  //res.render('comments', { comments: JSON.stringify(comments) });
});

app.get('/comment/:id', (req, res) => {
  // req.params : 라우트 매개변수에 대한 정보가 담겨 있음
  console.log('req.params: ', req.params);

  const cmtId = Number(req.params.id);

  //   if (cmtId < 1 || cmtId > comments.length) {
  //     return res.render('404');
  //   }
  //   if (isNaN(cmtId)) {
  //     return res.render('404');
  //   }

  //console.log(Boolean(NaN), Boolean(undefined), Boolean(null)); // false
  if (!comments[cmtId - 1]) {
    return res.render('404');
  }

  res.render('comment', {
    comment: comments[cmtId - 1],
  });
});

app.get('/test/:id/:name', (req, res) => {
  console.log(req.params);
  res.send('zz');
});

app.get('*', (req, res) => {
  res.render('404');
});

app.listen(8888, () => console.log('서버시작, 8888'));
