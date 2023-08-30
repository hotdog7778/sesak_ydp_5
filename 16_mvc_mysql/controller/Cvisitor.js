const visitor = require('../model/Visitor');

const main = (req, res) => {
  res.render('index');
};

const getVisitors = (req, res) => {
  visitor.getVisitors((resultRows) => {
    // console.log('controller ???>>', resultRows);
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

const getVisitor = (req, res) => {
  // console.log(req.params); // { id: '15' }
  const { id } = req.params;
  visitor.getVisitor(id, (result) => {
    // console.log(result); // { id: 1, name: '홍길동', comment: '내가 왔다.' }
    res.send(result);
  });
};

const updateVisitor = (req, res) => {
  // console.log(req.body); // { id: 15, name: '왜', comment: '바로화면에 안나와' }
  visitor.updateVisitor(req.body, () => {
    // console.log(result);
    res.send({ isUpdated: true, msg: '수정 되었습니다.' });
  });
};

module.exports = {
  main,
  getVisitors,
  postVisitor,
  deleteVisitor,
  getVisitor,
  updateVisitor,
};
