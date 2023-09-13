import multer from 'multer';
import express from 'express';
import eventImg from '../models/eventModel.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import {eventImageController,getEventImageController,deleteEventImgController,resetScoreController} from '../controllers/eventControllers.js'
import formidable from "express-formidable";


const router = express.Router();

router.post('/eventimg',requireSignIn,isAdmin,formidable(),eventImageController)

router.get('/getEventImg',formidable(),getEventImageController)
router.delete('/deleteEventImg/:id',requireSignIn,isAdmin,formidable(),deleteEventImgController)
router.put('/resetScore',requireSignIn,isAdmin,resetScoreController)

export default router;
