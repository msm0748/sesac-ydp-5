const bcrypt = require('bcrypt');
const { User } = require('../models');
const dotenv = require('dotenv');
dotenv.config();

// 메인 페이지
exports.main = async (req, res) => {
  const isLoggedIn = req.session.isLoggedIn;
  if (!isLoggedIn) return res.render('index', { isLoggedIn: false });

  try {
    const id = req.session.user.id;
    const { name } = await User.findOne({
      where: { id },
    });
    res.render('index', { isLoggedIn, userName: name });
  } catch (err) {
    console.error(err);
  }
};

// 회원가입 페이지
exports.getSignup = (req, res) => {
  res.render('signup');
};

// pw 암호화 함수
const hashPassword = (password) => {
  return bcrypt.hashSync(password, Number(process.env.SALT_ROUNDS));
};

// 회원가입 로직
exports.postSignup = async (req, res) => {
  const { userid, pw, name } = req.body;

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
    console.error(err);
  }
};

// 로그인 페이지
exports.getSignin = (req, res) => {
  res.render('login');
};

// 로그인 로직
exports.postSignin = async (req, res) => {
  const { userid, pw: originalPassword } = req.body;

  try {
    const {
      pw: hashedPassword,
      name,
      id,
    } = await User.findOne({
      where: { userid },
    });

    // 원본 비밀번호와 해시된 비밀번호가 일치하는지 확인
    const comparePassword = (password, hashedPassword) => {
      return bcrypt.compareSync(password, hashedPassword);
    };

    const isMatch = comparePassword(originalPassword, hashedPassword);

    if (isMatch) {
      req.session.isLoggedIn = true;
      req.session.user = {
        id,
      };
      res.send({ result: true, user: { name } });
    } else {
      res.send({ result: false });
    }
  } catch (err) {
    res.send(false);
    console.error(err);
  }
};

// 프로필 페이지
exports.getProfile = async (req, res) => {
  const isLoggedIn = req.session.isLoggedIn;
  if (!isLoggedIn) return res.redirect('./');

  try {
    const id = req.session.user.id;
    const { name, userid, pw } = await User.findOne({
      where: { id },
    });
    res.render('profile', { isLoggedIn, user: { id, name, userid, pw } });
  } catch (err) {
    console.error(err);
  }
};

// 회원 수정 로직
exports.patchProfile = async (req, res) => {
  const { id, userid, pw, name } = req.body;
  const hashedPassword = hashPassword(pw);
  try {
    await User.update(
      {
        userid,
        pw: hashedPassword,
        name,
      },
      {
        where: {
          id,
        },
      }
    );
    res.send({ result: true });
  } catch (err) {
    res.send({ result: false });
    console.error(err);
  }
};

// 회원 탈퇴 로직
exports.deleteAccount = async (req, res) => {
  const { id } = req.body;
  try {
    await User.destroy({
      where: { id },
    });
    req.session.isLoggedIn = false;
    res.send({ result: true });
  } catch (err) {
    res.send({ result: false });
    console.error(err);
  }
};

// 전체회원 페이지
exports.getUsers = async (req, res) => {
  const isLoggedIn = req.session.isLoggedIn;
  if (!isLoggedIn) return res.redirect('./login');
  // 전체 회원 가져오기
  const id = req.session.user.id;
  const { name } = await User.findOne({
    where: { id },
  });
  const result = await User.findAll();
  res.render('users', { users: result, userName: name });
};

// 로그아웃
exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return;
    }

    res.redirect('./');
  });
};
