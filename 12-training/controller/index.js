const users = require('../model/user.js');

exports.main = (req, res) => {
  res.render('dynamic');
};

exports.login = (req, res) => {
  for (const user of users) {
    if (req.body.userId === user.id && req.body.userPw === user.pw) {
      return res.send({ isSuccess: true, userId: req.body.userId });
    }
  }
  res.send({ isSuccess: false });
};
