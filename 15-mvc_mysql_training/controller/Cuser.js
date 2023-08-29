// TODO: 컨트롤러 코드

// main view
exports.main = (req, res) => {
  res.render('index');
};

// signup view
exports.getSignup = (req, res) => {
  res.render('signup');
};

// signin view
exports.getSignin = (req, res) => {
  res.render('signin');
};
