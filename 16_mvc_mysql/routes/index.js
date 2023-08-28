const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

router.get('/', controller.main);

router.get('/visitors', controller.getVisitors);

router.post('/visitor', controller.postVisitors);

module.exports = router;
