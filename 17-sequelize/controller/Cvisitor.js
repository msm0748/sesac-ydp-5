// const Visitor = require('../model/Visitor');

const { Visitor } = require('../models'); // ../models/index.js

exports.main = (req, res) => {
  res.render('index');
};

exports.getVisitors = async (req, res) => {
  // [before]
  // Visitor.getVisitors((result) => {
  //   console.log('controller >>', result);
  //   res.render('visitor', { data: result });
  // });

  const result = await Visitor.findAll();
  console.log(result);
  res.render('visitor', { data: result });
};

// create
exports.postVisitor = async (req, res) => {
  // [before]
  // console.log(req.body); // { name: xx, comment: yy }
  // const { name, comment } = req.body;
  // Visitor.postVisitor(req.body, (insertId) => {
  //   console.log('controller >> ', insertId);
  //   res.send({ id: insertId, name: name, comment: comment });
  // });

  // [after]
  const { name, comment } = req.body;
  const result = await Visitor.create({
    name,
    comment,
  });
  console.log(result);
  // create 메서드가 실행된 결과값
  res.send(result);
};

// delete
exports.deleteVisitor = async (req, res) => {
  // [before]
  // console.log(req.body); // { id: xx }
  // const { id } = req.body;
  // Visitor.deleteVisitor(id, (result) => {
  //   console.log('controller >>', result); // true
  //   res.send(result); // res.send(true)
  // });

  // [after]
  const { id } = req.body;
  await Visitor.destroy({
    where: { id },
  });

  res.send(true);
};

// read one
exports.getVisitor = async (req, res) => {
  // [before]
  // const { id } = req.params;
  // Visitor.getVisitor(id, (result) => {
  //   // result: 모델의 getVisitor callback의 인자(rows[0]);
  //   console.log(result); // {}
  //   res.send(result);
  // });

  // [after]
  const { id } = req.params;
  const result = await Visitor.findOne({
    where: { id },
  });
  console.log(result);
  res.send(result);
};

// update
exports.updateVisitor = async (req, res) => {
  // [before]
  // console.log(req.body); // {id: x, name: x, comment: x}
  // Visitor.updateVisitor(req.body, () => {
  //   res.send({ isUpdated: true });
  // });

  // [after]
  await Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: { id: req.body.id },
    }
  );
  res.send({ isUpdated: true });
};
