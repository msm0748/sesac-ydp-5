// TODO: 라우트 설정
const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

router.get('/', controller.main);
router.get('/signup', controller.getSignup);
router.get('/signin', controller.getSignin);

module.exports = router;
