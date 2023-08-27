const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

router.get('/', controller.mainController);

router.post('/login', controller.loginController);

module.exports = router;
