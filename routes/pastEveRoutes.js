import express from 'express';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import {uploadPastEventImg,getPastEventImg,deletePastEventImg} from '../controllers/pastEventController.js'
import formidable from "express-formidable";


const router = express.Router();

router.post('/pastEventImg',requireSignIn,isAdmin,formidable(),uploadPastEventImg)

router.get('/getPastEventImg',formidable(),getPastEventImg)
router.delete('/deletePastEventImg/:id',requireSignIn,isAdmin,formidable(),deletePastEventImg)

export default router;
