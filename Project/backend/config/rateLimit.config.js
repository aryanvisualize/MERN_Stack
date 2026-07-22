import {rateLimit} from "express-rate-limit";

export const loginLimitter = rateLimit({
    windowMs: 15*60*1000,
    max: 2,
    message: "Too many attempts",
});