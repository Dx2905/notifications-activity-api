"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const router = (0, express_1.Router)();
// Wrap async handlers to ensure proper typing (Promise<void>)
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, authController_1.loginUser)(req, res);
}));
router.post('/refresh', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, authController_1.refreshTokenHandler)(req, res);
}));
exports.default = router;
