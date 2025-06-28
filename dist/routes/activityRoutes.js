"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activityController_1 = require("../controllers/activityController");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// TypeScript expects the handler to return void or Promise<void>
// Wrapping inside arrow functions avoids invalid inferred return types
router.post('/log', auth_1.authenticate, (req, res) => {
    (0, activityController_1.logActivity)(req, res);
});
router.get('/user/:id', auth_1.authenticate, (req, res) => {
    (0, activityController_1.getUserActivities)(req, res);
});
exports.default = router;
