const express = require('express');
const router = express.Router();
const controller = require('../controller/userController.js');

router.get('/', controller.main);
router.get('/register', controller.getSignup);
router.post('/register', controller.postSignup);
router.get('/login', controller.getSignin);
router.post('/login', controller.postSignin);

module.exports = router;
