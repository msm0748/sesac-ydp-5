const express = require('express');
const router = express.Router();
const controller = require('../controller/userController.js');

router.get('/', controller.main);
router.get('/register', controller.getSignup);
router.post('/register', controller.postSignup);
router.get('/login', controller.getSignin);
router.post('/login', controller.postSignin);
router.get('/users', controller.getUsers);
router.get('/profile', controller.getProfile);
router.patch('/profile/edit', controller.patchProfile);
router.delete('/destroy', controller.deleteAccount);
router.get('/logout', controller.logout);

module.exports = router;
