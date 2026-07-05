import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { getNotes, createNote, updateNote, deleteNote } from '../controllers/notes.controller.js';

const router = express.Router();

router.get('/', authMiddleware, getNotes);
router.post('/', authMiddleware, createNote);
router.put('/:id', authMiddleware, updateNote);
router.delete('/:id', authMiddleware, deleteNote);

export default router;
