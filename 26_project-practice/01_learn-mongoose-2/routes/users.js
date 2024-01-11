// const express = require('express');
// const User = require('../schemas/user');
// const Comment = require('../schemas/comment');

// const router = express.Router();

// router
//   .route('/')
//   .get(async (req, res, next) => {
//     try {
//       const users = await User.find({});
//       res.json(users);
//     } catch (err) {
//       console.error(err);
//       next(err);
//     }
//   })
//   .post(async (req, res, next) => {
//     try {
//       const user = await User.create({
//         name: req.body.name,
//         age: req.body.age,
//         married: req.body.married,
//       });
//       console.log(user);
//       res.status(201).json(user);
//     } catch (err) {
//       console.error(err);
//       next(err);
//     }
//   });

// router.get('/:id/comments', async (req, res, next) => {
//   try {
//     const comments = await Comment.find({ commenter: req.params.id }).populate('commenter');
//     // Comment 스키마 commenter 필드의 ref가 User로 되어 있으므로, 자동으로 users 컬렉션에서 사용자 다큐먼트를 찾아 합칩니다. commenter 필드가 사용자 다큐먼트로 치환됩니다. 이제 commenter 필드는 ObjectId가 아니라 그 ObjectId를 가진 사용자 다큐먼트가 됩니다
//     // 요청 자체는 두번하게 되는것 같음

//     console.log(comments);
//     res.json(comments);
//   } catch (err) {
//     console.error(err);
//     next(err);
//   }
// });

// module.exports = router;
