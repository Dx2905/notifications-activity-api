import { Router } from 'express';
import { logActivity, getUserActivities } from '../controllers/activityController';
import { authenticate } from '../middleware/auth';

const router = Router();

// TypeScript expects the handler to return void or Promise<void>
// Wrapping inside arrow functions avoids invalid inferred return types

router.post('/log', authenticate, (req, res) => {
  logActivity(req, res);
});

router.get('/user/:id', authenticate, (req, res) => {
  getUserActivities(req, res);
});

export default router;
