"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserActivities = exports.logActivity = void 0;
const activityStore = {};
const logActivity = (req, res) => {
    const { userId } = req.user;
    const { type } = req.body;
    if (!type) {
        res.status(400).json({ message: 'Activity type required' });
        return;
    }
    const newActivity = {
        userId,
        type,
        timestamp: new Date().toISOString(),
    };
    if (!activityStore[userId])
        activityStore[userId] = [];
    activityStore[userId].push(newActivity);
    res.status(201).json({ message: 'Activity logged', activity: newActivity });
};
exports.logActivity = logActivity;
const getUserActivities = (req, res) => {
    const { id } = req.params;
    const activities = activityStore[id] || [];
    res.status(200).json({ activities });
};
exports.getUserActivities = getUserActivities;
