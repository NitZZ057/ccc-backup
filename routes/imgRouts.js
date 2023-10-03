import express from 'express';
import { addQuestionController,getQuestionController } from '../controllers/queController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import formidable from "express-formidable";

const router = express.Router();

router.post('/upload-img',requireSignIn,isAdmin,formidable(),addQuestionController)

router.get('/get-img',formidable(),getQuestionController)

export default router;
