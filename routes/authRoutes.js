import express from 'express';
import { registerController,
    signInController,
    getScoreController,
    forgotPasswordController,
    resetPasswordController } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";


const router = express.Router();

router.post('/sign-up',registerController);
router.post('/sign-in',signInController);
router.post('/forgot-password',forgotPasswordController);
router.post('/reset-password',resetPasswordController);
router.get('/score/:id',requireSignIn,getScoreController);

router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
  });

export default router;