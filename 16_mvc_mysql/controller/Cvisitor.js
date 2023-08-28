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

const postVisitor = (req, res) => {
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

const deleteVisitor = (req, res) => {
  console.log(req.body);
  const { id } = req.body;

  visitor.deleteVisitor(id, (result) => {
    console.log(result); // 성공했으면 result의 값은 true일것임.
    res.send(result);
  });
};

module.exports = {
  main,
  getVisitors,
  postVisitor,
  deleteVisitor,
};
