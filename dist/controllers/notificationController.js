"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendAlertNotification = exports.sendSignupNotification = void 0;
const sendSignupNotification = (req, res) => {
    const { userId } = req.user;
    console.log(`📬 Sending signup confirmation to user ${userId}`);
    res.status(200).json({ message: `Signup notification sent to ${userId}` });
};
exports.sendSignupNotification = sendSignupNotification;
const sendAlertNotification = (req, res) => {
    const { userId } = req.user;
    const { message } = req.body;
    if (!message) {
        res.status(400).json({ error: 'Alert message required' });
        return;
    }
    console.log(`🚨 Alert for ${userId}: ${message}`);
    res.status(200).json({ message: `Alert sent to ${userId}` });
};
exports.sendAlertNotification = sendAlertNotification;
