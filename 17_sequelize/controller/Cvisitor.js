const { Visitor } = require('../models');
const moment = require('moment');

const main = (req, res) => {
  res.render('index');
};

const getVisitors = async (req, res) => {
  const result = await Visitor.findAll();

  const formattedData = [];
  for (const entry of result) {
    const formattedEntry = {
      id: entry.dataValues.id,
      name: entry.dataValues.name,
      comment: entry.dataValues.comment,
      // createdAt: entry.dataValues.createdAt,
      // updatedAt: entry.dataValues.updatedAt,
      createdAt: moment(entry.dataValues.createdAt).format(
        'YYYY년 MM월 DD일 <br> HH시 mm분'
      ),
      updatedAt: moment(entry.dataValues.updatedAt).format(
        'YYYY년 MM월 DD일 <br> HH시 mm분'
      ),
    };
    console.log(formattedEntry);
    formattedData.push(formattedEntry);
  }

  //console.log(formattedData);
  // res.send('visitor', {
  res.send({
    data: formattedData,
  });
};

const postVisitor = async (req, res) => {
  // [after]
  const { name, comment } = req.body;

  const result = await Visitor.create({
    name,
    comment,
  });

  res.send({
    id: result.dataValues.id,
    name: result.dataValues.name,
    comment: result.dataValues.comment,
    createdAt: result.dataValues.createdAt,
    updatedAt: result.dataValues.updatedAt,
    // createdAt: moment(Date()).format('YYYY년 MM월 DD일 <br> HH시 mm분'),
    // updatedAt: moment(Date()).format('YYYY년 MM월 DD일 <br> HH시 mm분'),
  });
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
  // console.log(result);
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
  const result = await Visitor.update(
    { name: req.body.name, comment: req.body.comment },
    { where: { id: req.body.id } }
  );
  const date = moment(Date()).format('YYYY년 MM월 DD일 <br> HH시 mm분');
  res.send({
    isUpdated: true,
    msg: '수정 되었습니다.',
    updatedAt: date,
  });

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
