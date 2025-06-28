import { Router } from 'express';
import { sendSignupNotification, sendAlertNotification } from '../controllers/notificationController';
import { authenticate } from '../middleware/auth';

const router = Router();

// Wrap in functions to ensure return type is void
router.post('/signup', authenticate, (req, res) => {
  sendSignupNotification(req, res);
});

router.post('/alert', authenticate, (req, res) => {
  sendAlertNotification(req, res);
});

export default router;
