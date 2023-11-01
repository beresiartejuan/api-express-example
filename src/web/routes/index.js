import { Router } from "express";
import HomeController from "./../controllers/HomeController.js";

const router = Router();

router.use((_, res, next) => {
    res.set({ 'content-type': 'text/html; charset=utf-8' });
    next();
});

router.get("/", HomeController);

export default router;