// TODO: 컨트롤러 코드
const { User } = require('../models');

// main view
exports.main = (req, res) => {
  res.render('index');
};

// signup view
exports.getSignup = (req, res) => {
  res.render('signup');
};

// signup logic
exports.postSignup = async (req, res) => {
  const { userid, pw, name } = req.body;
  const result = await User.create({
    userid,
    pw,
    name,
  });
  res.send(result);
};

// signin view
exports.getSignin = (req, res) => {
  res.render('signin');
};

// signin logic
exports.postSignin = async (req, res) => {
  const { userid, pw } = req.body;

  try {
    const result = await User.findOne({
      where: { userid, pw },
    });
    res.send(result);
  } catch (err) {
    res.send(false);
  }
};

// profile view
exports.postProfile = async (req, res) => {
  const { userid } = req.body;
  const result = await User.findOne({
    where: { id: userid },
  });

  res.render('profile', {
    user: {
      id: result.id,
      userid: result.userid,
      pw: result.pw,
      name: result.name,
    },
  });
};

// edit profile
exports.putProfile = async (req, res) => {
  const { id, userid, pw, name } = req.body;
  const result = await User.update(
    {
      userid,
      pw,
      name,
    },
    {
      where: {
        id,
      },
    }
  );
  res.send(true);
};

// delete profile
exports.deleteProfile = async (req, res) => {
  const { id } = req.body;
  const result = await User.destroy({
    where: { id },
  });
  res.send(true);
};
