import { Router } from "express";

import setApiHeaders from "./../middlewares/setApiHeaders.js";
import handlerApiErrors from "./../middlewares/handlerApiErrors.js";

import InmueblesRoutes from "./inmuebles.js";

const router = Router();

router.use(setApiHeaders);

router.use("/inmuebles", InmueblesRoutes);

router.use(handlerApiErrors);

export default router;