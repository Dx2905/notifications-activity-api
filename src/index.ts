import './loadEnv';
import dotenv from 'dotenv';
import express from 'express';
import authRoutes from './routes/authRoutes';
import activityRoutes from './routes/activityRoutes';
import notificationRoutes from './routes/notificationRoutes';



// dotenv.config();

const app = express();
app.use(express.json());

// Mount routes
app.use('/auth', authRoutes);      // Public routes (login, refresh)
app.use('/activity', activityRoutes); // Protected routes (JWT required)
app.use('/notify', notificationRoutes);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
