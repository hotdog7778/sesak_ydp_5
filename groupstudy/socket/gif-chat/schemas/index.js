const mongoose = require('mongoose');

const { MONGO_ID, MONGO_PASSWORD, NODE_ENV } = process.env;
const MONGO_URL = `mongodb://${MONGO_ID}:${MONGO_PASSWORD}@cluster0.ecyjxns.mongodb.net/?retryWrites=true&w=majority`;

const connect = async () => {
  try {
    if (NODE_ENV !== 'production') {
      mongoose.set('debug', true);
    }
    await mongoose.connect(MONGO_URL, {
      dbName: 'gifchat',
      useNewUrlParser: true,
    });
  } catch (error) {
    console.log('몽고디비 연결 에러', error);
  }
};

mongoose.connection.on('error', (error) => {
  console.error('몽고디비 연결 에러', error);
});
mongoose.connection.on('disconnected', () => {
  console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
  connect();
});

module.exports = connect;
