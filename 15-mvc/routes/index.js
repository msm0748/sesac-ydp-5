// 이 모듈의 역할
// 경로 선언과 관련된 내용 기술
const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

// module.exports 구문을 통해 router를 내보내야
// 다른 모듈(파일)에서 router 객체를 사용 가능

// router.get('/', (req, res) => {
//   res.render('index');
// });

// router.get('/comments', (req, res) => {
//   res.render('comments', {
//     comments,
//   });
// });

// router.get('/comment/:id', (req, res) => {
//   // req.params: 라우트 매개변수에 대한 정보가 담겨 있음
//   console.log(req.params); // { id: '1' }
//   const cmtId = Number(req.params.id); // 댓글의 고유 아이디

//   if (!comments[cmtId - 1]) {
//     return res.render('404');
//   }

//   res.render('comment', { comment: comments[cmtId - 1] });
// });

router.get('/', controller.main);
router.get('/comments', controller.comments);
router.get('/comment/:id', controller.comment);

module.exports = router;
