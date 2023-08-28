const visitor = require('../model/Visitor');

const main = (req, res) => {
  res.render('index');
};

const getVisitors = (req, res) => {
  visitor.getVisitors((resultRows) => {
    console.log('controller >>', resultRows);
    res.render('visitor', { data: resultRows });
  });
};

const postVisitors = (req, res) => {
  console.log(req.body);

  visitor.postVisitor(req.body, (insertId) => {
    console.log('controller >>', insertId);
    res.send({
      id: insertId,
      name: req.body.name,
      comment: req.body.comment,
    });
  });
};

module.exports = {
  main,
  getVisitors,
  postVisitors,
};
