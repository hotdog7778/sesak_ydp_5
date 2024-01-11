const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
const groupRouter = require('./groupRouter');

// api/user
router.use('/api/user', userRouter);

// api/group
router.use('/api/group', groupRouter);

module.exports = router;
