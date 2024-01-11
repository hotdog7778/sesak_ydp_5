const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');

// api/user
router.use('/api/user', userRouter);

module.exports = router;
