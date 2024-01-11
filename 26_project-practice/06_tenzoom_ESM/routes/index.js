import express from 'express';
const router = express.Router();

import userRouter from './userRouter.js';
import groupRouter from './groupRouter.js';

// api/user
router.use('/api/user', userRouter);

// api/group
router.use('/api/group', groupRouter);

export default router;
