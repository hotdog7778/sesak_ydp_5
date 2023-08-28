const visitor = require('../model/Visitor');

const main = (req, res) => {
  res.render('index');
};

const getVisitors = (req, res) => {
  // before set mysql
  // res.render('visitor', { data: visitor.getVisitors() });

  // after set mysql
  // console.log(visitor.getVisitors());
  visitor.getVisitors((resultRows) => {
    console.log('controller >>', resultRows);
    res.render('visitor', { data: resultRows });
  });
};

module.exports = {
  main,
  getVisitors,
};
