import express from 'express';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import {uploadHofDetails,uploadLeadImg,getHOFDetails,getLeadImg,deleteHOFImg,deleteHOFDetails} from '../controllers/hofController.js'
import formidable from "express-formidable";


const router = express.Router();

router.post('/uploadHOFDetails',requireSignIn,isAdmin,formidable(),uploadHofDetails)
router.post('/uploadLeadImg',requireSignIn,isAdmin,formidable(),uploadLeadImg)

router.get('/getHOFDetails',formidable(),getHOFDetails)
router.get('/getLeadImg',formidable(),getLeadImg)
router.delete('/deleteHOFImg/:id',requireSignIn,isAdmin,formidable(),deleteHOFImg)
router.delete('/deleteHOFDetails/:id',requireSignIn,isAdmin,formidable(),deleteHOFDetails)

export default router;
