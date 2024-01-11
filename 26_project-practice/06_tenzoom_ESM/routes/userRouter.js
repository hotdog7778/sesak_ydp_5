import express from 'express';
const router = express.Router();
// 컨트롤러 불러오기
import Cuser from '../controller/Cuser.js';

// /api/user/test
router.get('/test', Cuser.test);

export default router;
