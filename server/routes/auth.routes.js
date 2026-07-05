import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { registerUser, loginUser, getUser } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user', authMiddleware, getUser);

export default router;
