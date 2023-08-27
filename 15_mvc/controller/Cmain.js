const Comment = require('../model/Comment');

module.exports = {
  main: (req, res) => {
    res.render('index');
  },
  comments: (req, res) => {
    res.render('comments', {
      comments: Comment.getCommentsAll(),
    });
  },
  comment: (req, res) => {
    const comments = Comment.getCommentsAll();
    const cmtId = Number(req.params.id);

    if (!comments[cmtId - 1]) {
      return res.render('404');
    }

    res.render('comment', {
      comment: comments[cmtId - 1],
    });
  },
};

// exports.main = (req, res) => {};
// exports.comments = (req, res) => {};
// exports.comment = (req, res) => {};
