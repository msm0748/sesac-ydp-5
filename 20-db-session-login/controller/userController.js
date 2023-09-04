const bcrypt = require('bcrypt');
const { User } = require('../models');
const dotenv = require('dotenv');
dotenv.config();

exports.main = (req, res) => {
  res.render('index');
};

// 회원가입 뷰
exports.getSignup = (req, res) => {
  res.render('signup');
};

// 회원가입 로직
exports.postSignup = async (req, res) => {
  const { userid, pw, name } = req.body;

  // pw 암호화
  const hashPassword = (password) => {
    return bcrypt.hashSync(password, Number(process.env.SALT_ROUNDS));
  };
  const hashedPassword = hashPassword(pw);

  try {
    await User.create({
      userid,
      pw: hashedPassword,
      name,
    });

    res.send({ result: true });
  } catch (err) {
    res.send(false);
  }
};

// 로그인 뷰
exports.getSignin = (req, res) => {
  res.render('login');
};

// 로그인 로직
exports.postSignin = async (req, res) => {
  const { userid, pw: originalPassword } = req.body;

  try {
    const { pw: hashedPassword, name } = await User.findOne({
      where: { userid },
    });

    const comparePassword = (password, hashedPassword) => {
      return bcrypt.compareSync(password, hashedPassword);
    };

    const isMatch = comparePassword(originalPassword, hashedPassword);

    if (isMatch) {
      req.session.userName = name;
      res.send({ result: true, user: { name } });
    } else {
      res.send({ result: false });
    }
  } catch (err) {
    res.send(false);
  }

  // pw 복호화
};
