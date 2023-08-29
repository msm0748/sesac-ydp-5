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

// signin logic
exports.postSignin = (req, res) => {
  User.postSignin(req.body, (result) => {
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send(false);
    }
  });
};

// profile view
exports.postProfile = (req, res) => {
  console.log(req.body); // userid = db의 id 값
  User.postProfile(req.body, (result) => {
    console.log(result[0].id);
    res.render('profile', {
      user: {
        id: result[0].id,
        userid: result[0].userid,
        pw: result[0].pw,
        name: result[0].name,
      },
    });
  });
};

// delete profile
exports.deleteProfile = (req, res) => {
  User.deleteProfile(req.body, (result) => {
    res.send(result);
  });
};
