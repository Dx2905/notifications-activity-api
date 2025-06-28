import { Request, Response } from 'express';

interface Activity {
  userId: string;
  type: string;
  timestamp: string;
}

const activityStore: Record<string, Activity[]> = {};

export const logActivity = (req: Request, res: Response): void => {
  const { userId } = (req as any).user;
  const { type } = req.body;

  if (!type) {
    res.status(400).json({ message: 'Activity type required' });
    return;
  }

  const newActivity: Activity = {
    userId,
    type,
    timestamp: new Date().toISOString(),
  };

  if (!activityStore[userId]) activityStore[userId] = [];
  activityStore[userId].push(newActivity);

  res.status(201).json({ message: 'Activity logged', activity: newActivity });
};

export const getUserActivities = (req: Request, res: Response): void => {
  const { id } = req.params;
  const activities = activityStore[id] || [];
  res.status(200).json({ activities });
};
