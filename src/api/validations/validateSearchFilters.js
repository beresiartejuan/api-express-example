import { param, checkSchema } from "express-validator";

const is_positive = value => value > 0;

const validateSearchFilters = [
    checkSchema({
        piso: {
            optional: true,
            isNumeric: true,
            isInt: true,
            errorMessage: "El piso debe ser un número mayor o igual a 1",
            custom: {
                options: is_positive
            },
        },
        letra: {
            optional: true,
            notEmpty: true,
            errorMessage: "La letra es obligatoria para registrar un inmueble"
        },
        extension: {
            optional: true,
            notEmpty: true,
            isNumeric: true,
            custom: {
                options: is_positive
            },
            errorMessage: "La extensión debe ser mayor a 0"
        },
        numero_de_habitaciones: {
            optional: true,
            isNumeric: true,
            isInt: true,
            custom: {
                options: is_positive
            },
            errorMessage: "El número de habitaciones debe ser mayor a 0"
        },
        alquilado: {
            optional: true,
            notEmpty: true,
            isBoolean: true,
            errorMessage: "Es necesario saber sí el inmueble esta alquilado"
        },
        nombre_del_propietario: {
            optional: true,
            notEmpty: true,
            isString: true,
            errorMessage: "El nombre del propietario es un campo necesario"
        },
        email: {
            optional: true,
            notEmpty: true,
            isEmail: true,
            errorMessage: "Es necesario dar un email valido"
        }
    })
];

export default validateSearchFilters;