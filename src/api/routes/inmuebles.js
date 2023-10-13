import { Router } from "express";

import * as InmuebleController from "../controllers/inmuebles.js";

const router = Router();

router
    // Get all inmuebles
    .get("/", InmuebleController.getAllInmuebles)
    // Get one inmueble
    .get("/:id", InmuebleController.getInmubeleById)
    // Create a new inmueble
    .post("/", InmuebleController.createNewInmueble)
    // Edit one inmueble
    .put("/:id", InmuebleController.editInmuebleById)
    // Delete one inmueble
    .delete("/:id", InmuebleController.deleteInmuebleById)

export default router;