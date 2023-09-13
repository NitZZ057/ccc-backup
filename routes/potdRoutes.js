import express from 'express';
import {jdoodleController,getWinnersController,getArgsController} from '../controllers/potdController.js';
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post(`/compile/jdoodle`,jdoodleController);
router.get(`/get-winners`,getWinnersController);
router.get('/args',getArgsController);
export default router;