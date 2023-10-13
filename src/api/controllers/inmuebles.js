import express from "express";
import InmuebleService from "./../../services/inmuebles.js";

/**
 * @param {express.Request} request 
 * @param {express.Response} response 
 */
export const getAllInmuebles = async (request, response) => {

    response.type("json");

    if (request.method.toUpperCase() !== "GET") {
        return response.status(405).json({
            status: 405,
            message: `El metodo ${request.method} no esta soportado!`
        });
    }

    try {
        const inmuebles = await InmuebleService.get();
        return response.json(inmuebles);
    } catch (error) {
        return response.status(500).json({
            status: 500,
            message: "Ha ocurrido un error en el servidor!"
        })
    }
}

/**
 * @param {express.Request} request 
 * @param {express.Response} response 
 */
export const getInmubeleById = async (request, response) => {

    response.type("json");

    if (request.method.toUpperCase() !== "GET") {
        return response.status(405).json({
            status: 405,
            message: `El metodo ${request.method} no esta soportado!`
        });
    }

    const { id } = request.params;

    if (!id || typeof id !== "string") {
        return response.status(400).json({
            status: 400,
            message: 'El campo "id" es invalido.'
        })
    } else if (id.length < 5) {
        return response.status(400).json({
            status: 400,
            message: 'El campo "id" debe superar los 5 caracteres.'
        })
    }

    try {
        const inmuebles = await InmuebleService.get({ id });
        return response.json(inmuebles);
    } catch (error) {
        return response.status(404).json({
            status: 404,
            message: "El inmueble no esta registrado!"
        })
    }
}

/**
 * @param {express.Request} request 
 * @param {express.Response} response 
 */
export const createNewInmueble = async (request, response) => {

    response.type("json");

    console.log("aaa")

    if (request.method.toUpperCase() !== "POST") {
        return response.status(405).json({
            status: 405,
            message: `El metodo ${request.method} no esta soportado!`
        });
    }

    console.log(request.body);

    try {
        const nuevo_inmueble = await InmuebleService.create(request.body);
        return response.json(nuevo_inmueble);
    } catch (error) {
        if (typeof error === "string") {
            return response.status(400).json({
                status: 400,
                message: error
            });
        }

        return response.status(500).json({
            status: 500,
            message: "Ha ocurrido un error en el servidor!"
        })
    }

}

/**
 * @param {express.Request} request 
 * @param {express.Response} response 
 */
export const editInmuebleById = (request, response) => { }

/**
 * @param {express.Request} request 
 * @param {express.Response} response 
 */
export const deleteInmuebleById = (request, response) => { }