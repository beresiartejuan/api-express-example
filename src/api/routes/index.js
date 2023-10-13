import { Router } from "express";
import inmuebles from "./inmuebles.js";

const router = Router();

router.use("/inmuebles", inmuebles);

export default router;