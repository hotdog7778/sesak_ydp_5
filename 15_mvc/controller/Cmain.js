const Comment = require('../model/Comment');

const comments = Comment.getCommentsAll();

// exports.main = (req, res) => {};
// exports.comments = (req, res) => {};
// exports.comment = (req, res) => {};

module.exports = {
  main: (req, res) => {
    res.render('index');
  },
  comments: (req, res) => {
    res.render('comments', {
      comments: comments,
    });
  },
  comment: (req, res) => {
    const cmtId = Number(req.params.id);

    if (!comments[cmtId - 1]) {
      return res.render('404');
    }

    res.render('comment', {
      comment: comments[cmtId - 1],
    });
  },
};
