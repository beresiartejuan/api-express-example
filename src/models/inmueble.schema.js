import Joi from "joi";

// import { createRequire } from "node:module";

// const require = createRequire(import.meta.url);

// const { object, number, string, boolean } = require("joi");

const InmuebleSchema = Joi.object({
    piso: Joi.number().positive().required(),
    letra: Joi.string().min(1).required(),
    extension: Joi.number().positive().required(),
    numero_de_habitaciones: Joi.number().positive().default(1),
    alquilado: Joi.boolean().default(false),
    nombre_del_propietario: Joi.string().min(3).required(),
    email: Joi.string().email().required()
});

export default InmuebleSchema;