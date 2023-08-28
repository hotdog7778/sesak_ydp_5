const visitor = require('../model/Visitor');

const main = (req, res) => {
  res.render('index');
};

const getVisitors = (req, res) => {
  res.render('visitor', { data: visitor.getVisitors() });
};

module.exports = {
  main,
  getVisitors,
};
