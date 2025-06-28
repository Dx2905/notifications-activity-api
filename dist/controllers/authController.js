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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshTokenHandler = exports.loginUser = void 0;
const jwt_1 = require("../utils/jwt");
const redis_1 = __importDefault(require("../utils/redis"));
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.body;
    if (!userId) {
        res.status(400).json({ message: 'User ID required' });
        return;
    }
    const accessToken = (0, jwt_1.generateToken)(userId);
    const refreshToken = (0, jwt_1.generateRefreshToken)(userId);
    yield redis_1.default.set(userId, refreshToken);
    res.json({ accessToken, refreshToken });
});
exports.loginUser = loginUser;
const refreshTokenHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, refreshToken } = req.body;
    if (!userId || !refreshToken) {
        res.status(400).json({ message: 'Missing fields' });
        return;
    }
    try {
        const stored = yield redis_1.default.get(userId);
        if (stored !== refreshToken) {
            res.status(403).json({ message: 'Invalid token' });
            return;
        }
        (0, jwt_1.verifyToken)(refreshToken);
        const newAccessToken = (0, jwt_1.generateToken)(userId);
        res.json({ accessToken: newAccessToken });
    }
    catch (e) {
        res.status(403).json({ message: 'Error verifying refresh token' });
    }
});
exports.refreshTokenHandler = refreshTokenHandler;
