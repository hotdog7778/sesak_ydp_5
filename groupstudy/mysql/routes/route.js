const express = require('express');
const controller = require('../controller/helloCtr');
const router = express.Router();

router.get('/', controller.helloCtr);
router.get('/features', controller.featuresCtr);
router.get('/board', controller.board);
router.post('/postBoard', controller.postBoard);

module.exports = router;
