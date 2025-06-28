import { Router } from 'express';
import { loginUser, refreshTokenHandler } from '../controllers/authController';

const router = Router();

// Wrap async handlers to ensure proper typing (Promise<void>)
router.post('/login', async (req, res) => {
  await loginUser(req, res);
});

router.post('/refresh', async (req, res) => {
  await refreshTokenHandler(req, res);
});

export default router;
