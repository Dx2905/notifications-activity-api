import { Request, Response } from 'express';
import { generateToken, generateRefreshToken, verifyToken } from '../utils/jwt';
import redisClient from '../utils/redis';

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.body;

  if (!userId) {
    res.status(400).json({ message: 'User ID required' });
    return;
  }

  const accessToken = generateToken(userId);
  const refreshToken = generateRefreshToken(userId);

  await redisClient.set(userId, refreshToken);
  res.json({ accessToken, refreshToken });
};

export const refreshTokenHandler = async (req: Request, res: Response): Promise<void> => {
  const { userId, refreshToken } = req.body;

  if (!userId || !refreshToken) {
    res.status(400).json({ message: 'Missing fields' });
    return;
  }

  try {
    const stored = await redisClient.get(userId);

    if (stored !== refreshToken) {
      res.status(403).json({ message: 'Invalid token' });
      return;
    }

    verifyToken(refreshToken);
    const newAccessToken = generateToken(userId);
    res.json({ accessToken: newAccessToken });
  } catch (e) {
    res.status(403).json({ message: 'Error verifying refresh token' });
  }
};
