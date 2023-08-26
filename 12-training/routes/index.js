const express = require('express');
const router = express.Router();
const controller = require('../controller/index.js');

router.get('/', controller.main);
router.post('/axios', controller.login);

module.exports = router;
