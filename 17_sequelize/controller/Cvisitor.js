// const visitor = require('../model/Visitor');
const { Visitor } = require('../models');

const main = (req, res) => {
  res.render('index');
};

const getVisitors = async (req, res) => {
  // [before]
  // visitor.getVisitors((resultRows) => {
  //   // console.log('controller ???>>', resultRows);
  //   res.render('visitor', { data: resultRows });
  // });

  const result = await Visitor.findAll();
  console.log(result);
  res.render('visitor', { data: result });
};

const postVisitor = async (req, res) => {
  // [after]
  const { name, comment } = req.body;
  const result = await Visitor.create({
    name,
    comment,
  });
  // console.log(result);
  res.send(result);

  // [before]
  // visitor.postVisitor(req.body, (insertId) => {
  //   console.log('controller >>', insertId);
  //   res.send({
  //     id: insertId,
  //     name: req.body.name,
  //     comment: req.body.comment,
  //   });
  // });
};

const deleteVisitor = async (req, res) => {
  // [after]
  const { id } = req.body;
  const result = await Visitor.destroy({
    where: { id: id },
  });
  console.log(result);
  res.send(true);

  // [before]
  // console.log(req.body);
  // const { id } = req.body;

  // visitor.deleteVisitor(id, (result) => {
  //   console.log(result); // 성공했으면 result의 값은 true일것임.
  //   res.send(result);
  // });
};

const getVisitor = async (req, res) => {
  // [after]
  const { id } = req.params;
  const result = await Visitor.findOne({
    where: { id: id },
  });
  console.log(result);
  res.send(result);

  //
  // // console.log(req.params); // { id: '15' }
  // const { id } = req.params;
  // visitor.getVisitor(id, (result) => {
  //   // console.log(result); // { id: 1, name: '홍길동', comment: '내가 왔다.' }
  //   res.send(result);
  // });
};

const updateVisitor = async (req, res) => {
  // [after]
  // update({변경될 값},{where 절})
  await Visitor.update(
    { name: req.body.name, comment: req.body.comment },
    { where: { id: req.body.id } }
  );
  res.send({ isUpdated: true, msg: '수정 되었습니다.' });

  // // console.log(req.body); // { id: 15, name: '왜', comment: '바로화면에 안나와' }
  // visitor.updateVisitor(req.body, () => {
  //   // console.log(result);
  //   res.send({ isUpdated: true, msg: '수정 되었습니다.' });
  // });
};

module.exports = {
  main,
  getVisitors,
  postVisitor,
  deleteVisitor,
  getVisitor,
  updateVisitor,
};
