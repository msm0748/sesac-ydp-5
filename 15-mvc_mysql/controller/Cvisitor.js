const Visitor = require('../model/Visitor');

exports.main = (req, res) => {
  res.render('index');
};

exports.getVisitors = (req, res) => {
  // [before]
  // res.render('visitor', { data: Visitor.getVisitors() });

  // [after]
  // console.log(Visitor.getVisitors());
  Visitor.getVisitors((result) => {
    console.log('controller >> ', result);
    res.render('visitor', { data: result });
  });
};

exports.postVisitor = (req, res) => {
  console.log('controller >> ', req.body);
  // res.send({ result: true });
  Visitor.postVisitor(req.body, (insertId) => {
    console.log('controller >> ', insertId);
    res.send({ id: insertId, name: req.body.name, comment: req.body.comment });
  });
};
