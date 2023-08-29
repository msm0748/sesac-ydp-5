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
