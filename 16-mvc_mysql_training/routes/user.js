// TODO: 라우트 설정
const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

router.get('/', controller.main);
router.get('/signup', controller.getSignup);
router.post('/signup', controller.postSignup);

router.get('/signin', controller.getSignin);
router.post('/signin', controller.postSignin);

router.post('/profile', controller.postProfile);
router.put('/profile', controller.putProfile);
router.delete('/profile', controller.deleteProfile);

module.exports = router;
