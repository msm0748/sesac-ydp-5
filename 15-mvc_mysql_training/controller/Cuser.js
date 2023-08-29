// TODO: 컨트롤러 코드
const User = require('../model/User');

// main view
exports.main = (req, res) => {
  res.render('index');
};

// signup view
exports.getSignup = (req, res) => {
  res.render('signup');
};

// signup logic
exports.postSignup = (req, res) => {
  User.postSignup(req.body, (result) => {
    res.send(result);
  });
};

// signin view
exports.getSignin = (req, res) => {
  res.render('signin');
};
