// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'sesac',
});

exports.postSignup = (data, cb) => {
  const { userid, pw, name } = data;
  db.query(`INSERT INTO user VALUES(null, "${userid}", "${name}", "${pw}")`, (err, result) => {
    if (err) throw err;
    console.log('model >>', result);
    cb(true);
  });
};

exports.postSignin = (data, cb) => {
  const { userid, pw } = data;
  db.query(`SELECT * FROM user WHERE userid="${userid}" AND pw="${pw}"`, (err, result) => {
    if (err) throw err;
    cb(result);
  });
};

exports.postProfile = (data, cb) => {
  const { userid } = data;
  db.query(`SELECT * FROM user WHERE id="${userid}"`, (err, result) => {
    if (err) throw err;
    cb(result);
    // console.log(result);
  });
};

exports.putProfile = (data, cb) => {
  const { id, userid, pw, name } = data;
  db.query(`UPDATE user SET userid="${userid}", name="${name}", pw="${pw}" WHERE id="${id}"`, (err, result) => {
    if (err) throw err;
    cb(true);
  });
};

exports.deleteProfile = (data, cb) => {
  const { id } = data;
  db.query(`delete from user where id=${id}`, (err, result) => {
    if (err) throw err;
    cb(true);
  });
};
