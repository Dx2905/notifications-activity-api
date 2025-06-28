import { Request, Response } from 'express';

export const sendSignupNotification = (req: Request, res: Response): void => {
  const { userId } = (req as any).user;
  console.log(`📬 Sending signup confirmation to user ${userId}`);
  res.status(200).json({ message: `Signup notification sent to ${userId}` });
};

export const sendAlertNotification = (req: Request, res: Response): void => {
  const { userId } = (req as any).user;
  const { message } = req.body;

  if (!message) {
    res.status(400).json({ error: 'Alert message required' });
    return;
  }

  console.log(`🚨 Alert for ${userId}: ${message}`);
  res.status(200).json({ message: `Alert sent to ${userId}` });
};
