import { Router } from "express";

import validateRules from "./../middlewares/validateRules.js";
import validateInmuebleData from "./../validations/validateInmuebleData.js";
import validateSearchFilters from "./../validations/validateSearchFilters.js";

import {
    createInmueble, getInmuebles, updateInmueble, deleteInmueble
} from "./../controllers/InmuebleController.js";

const router = Router();

// Obtener un solo inmueble por ID
router.get("/:id", getInmuebles);

// Obtener todos los inmuebles (filtros opcionales)
router.get("/", validateRules(validateSearchFilters), getInmuebles);

// Crea un inmueble nuevo
router.post("/", validateRules(validateInmuebleData), createInmueble);

// Actualiza un inmueble por medio del ID
router.put("/:id", validateRules(validateSearchFilters), updateInmueble);

// Actualiza un inmueble por medio del ID
router.patch("/:id", validateRules(validateSearchFilters), updateInmueble);

// Elimina un inmueble por medio del ID
router.delete("/:id", deleteInmueble);

export default router;