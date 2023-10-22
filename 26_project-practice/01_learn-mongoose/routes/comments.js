const express = require('express');
const Comment = require('../schemas/comment');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const comment = await Comment.create({
      commenter: req.body.id,
      comment: req.body.comment,
    });
    console.log('!!!!', comment);
    // {
    //     commenter: new ObjectId("6533f245cae0e33497f72f5e"),
    //     comment: 'ㅎㅎ',
    //     _id: new ObjectId("6533f2de387187e2eecf1d6b"),
    //     createdAt: 2023-10-21T15:48:46.189Z,
    //     __v: 0
    // }
    const result = await Comment.populate(comment, { path: 'commenter' });
    // comment 객체에 commenter 필드를(path로 지정) 합치는데 ref로 지정된 User 모델의 _id 와 같은 도큐먼트를 합치는것
    // {
    //     commenter: {
    //       _id: new ObjectId("6533f245cae0e33497f72f5e"),
    //       name: '김태균',
    //       age: 31,
    //       married: false,
    //       createdAt: 2023-10-21T15:46:13.114Z,
    //       __v: 0
    //     },
    //     comment: 'ㅎㅎ',
    //     _id: new ObjectId("6533f2de387187e2eecf1d6b"),
    //     createdAt: 2023-10-21T15:48:46.189Z,
    //     __v: 0
    // }
    console.log('@@@@', result);
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router
  .route('/:id')
  .patch(async (req, res, next) => {
    try {
      const result = await Comment.updateMany(
        {
          _id: req.params.id, // where 와 같음. 즉 _id 필드의 데이터가 req.params.id와 같은 다큐먼트를 찾는다.
        },
        {
          comment: req.body.comment, // 여기는 수정 필드와 값. 여기 지정한것만 바꿈
        }
      );
      res.json(result);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const result = await Comment.deleteMany({ _id: req.params.id });
      res.json(result);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

module.exports = router;
