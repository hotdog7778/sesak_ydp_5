const mongoose = require('mongoose');

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

const commentSchema = new Schema({
  commenter: {
    type: ObjectId,
    required: true,
    ref: 'User', // commenter 필드에 User 스키마의 사용자 ObjectId가 들어간다는 뜻 // 몽구스가 JOIN과 비슷한 기능을 할 때 사용
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Comment', commentSchema);
// 몽구스는 model 메서드의 첫 번째 인자로 컬렉션 이름을 만든다.
// 첫 번째 인자가 Room이면 첫 글자를 소문자로 만든 뒤 복수형으로 바꿔서 Rooms 컬렉션을 생성한다.
// 이러한 강제 개명이 싫다면 세 번째 인자로 컬렉션 이름을 줄 수 있다.
// module.exports = mongoose.model('Room', roomSchema, 'room'); >> DB에 컬렉션은 room 으로 생성됨
