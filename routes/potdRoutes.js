import express from 'express';
import {cppController, javaController, pyController,jdoodleController} from '../controllers/potdController.js';

const router = express.Router();

router.post(`/cpp`,cppController);
router.post(`/java`,javaController);
router.post(`/python`,pyController);
router.post(`/jdoodle`,jdoodleController);

export default router;