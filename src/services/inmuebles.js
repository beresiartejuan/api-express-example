import Inmueble from "./../models/inmueble.model.js";
import InmuebleSchema from "./../models/inmueble.schema.js";

const get = async (filters = {}) => {

    const { id } = filters;

    if (id && typeof id === "string") {
        return await Inmueble.findById(id);
    }

    return (await Inmueble.find()) ?? [];
}

const create = async (params = {}) => {

    const { error, value } = InmuebleSchema.validate(params)

    if (error && typeof error !== undefined) {
        throw error.message;
    }

    if (value && typeof value === "object") {
        return await Inmueble.create(value);
    }

    throw new Error("Hubo un error al verificar los datos!");
}

const edit = async (params = {}) => {

    const { error, value } = InmuebleSchema.validate(params)

    if (error && typeof error !== undefined) {
        throw error.message;
    }

    if (value && typeof value == "object") {
        return await Inmueble.create(value);
    }

    throw new Error("Hubo un error al verificar los datos!");

}

const destroy = () => { }

export default {
    get, edit, create, destroy
}