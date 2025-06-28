"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notificationController_1 = require("../controllers/notificationController");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// Wrap in functions to ensure return type is void
router.post('/signup', auth_1.authenticate, (req, res) => {
    (0, notificationController_1.sendSignupNotification)(req, res);
});
router.post('/alert', auth_1.authenticate, (req, res) => {
    (0, notificationController_1.sendAlertNotification)(req, res);
});
exports.default = router;
