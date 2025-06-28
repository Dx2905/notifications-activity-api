"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./loadEnv");
const express_1 = __importDefault(require("express"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const activityRoutes_1 = __importDefault(require("./routes/activityRoutes"));
const notificationRoutes_1 = __importDefault(require("./routes/notificationRoutes"));
// dotenv.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Mount routes
app.use('/auth', authRoutes_1.default); // Public routes (login, refresh)
app.use('/activity', activityRoutes_1.default); // Protected routes (JWT required)
app.use('/notify', notificationRoutes_1.default);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
