import { checkSchema } from "express-validator";

const is_positive = value => value > 0;

const validateInmuebleData = [
    checkSchema({
        piso: {
            exists: true,
            isNumeric: true,
            isInt: true,
            errorMessage: "El piso debe ser un número mayor o igual a 1",
            custom: {
                options: is_positive
            },
        },
        letra: {
            exists: true,
            notEmpty: true,
            errorMessage: "La letra es obligatoria para registrar un inmueble"
        },
        extension: {
            exists: true,
            notEmpty: true,
            isNumeric: true,
            custom: {
                options: is_positive
            },
            errorMessage: "La extensión debe ser mayor a 0"
        },
        numero_de_habitaciones: {
            exists: true,
            isNumeric: true,
            isInt: true,
            custom: {
                options: is_positive
            },
            errorMessage: "El número de habitaciones debe ser mayor a 0"
        },
        alquilado: {
            exists: true,
            notEmpty: true,
            isBoolean: true,
            errorMessage: "Es necesario saber sí el inmueble esta alquilado"
        },
        nombre_del_propietario: {
            exists: true,
            notEmpty: true,
            isString: true,
            errorMessage: "El nombre del propietario es un campo necesario"
        },
        email: {
            exists: true,
            notEmpty: true,
            isEmail: true,
            errorMessage: "Es necesario dar un email valido"
        }
    })
];

export default validateInmuebleData;