import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET as string;

export const generateToken = (userId: string) => {
  return jwt.sign({ userId }, secret, { expiresIn: '15m' });
};

export const generateRefreshToken = (userId: string) => {
  return jwt.sign({ userId }, secret, { expiresIn: '7d' });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, secret);
};
