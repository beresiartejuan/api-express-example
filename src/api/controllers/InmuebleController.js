import status from "http-status";
import Inmueble from "./../../models/inmueble.model.js";
import errorMaker from "./../../services/errorMaker.js";

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export async function createInmueble(req, res, next) {

    const inmueble = await Inmueble.create(req.validated);

    const inmueble_saved = await inmueble.save();

    if (!inmueble_saved) next(500);

    return res.json({
        ok: true,
        result: inmueble_saved.toJSON({
            versionKey: false,
            flattenMaps: true,
            flattenObjectIds: true
        })
    })

}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export async function getInmuebles(req, res, next) {

    const { id } = req.params;

    const filters = req.validated;

    if (typeof id === "string") {

        try {
            const inmueble = await Inmueble.findById(id);

            return res.json({
                ok: true,
                result: [inmueble.toJSON({
                    versionKey: false,
                    flattenMaps: true,
                    flattenObjectIds: true
                })]
            });
        } catch (error) {
            return res.json({
                ok: true,
                result: []
            });
        }
    }

    const inmuebles = await Inmueble.find(filters);

    const parsed_inmuebles = inmuebles.map(inmueble => inmueble.toJSON({
        versionKey: false,
        flattenMaps: true,
        flattenObjectIds: true
    }));

    return res.json({
        ok: true,
        result: parsed_inmuebles
    });

}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export async function updateInmueble(req, res, next) {

    const { id } = req.params;

    const filters = req.validated;

    if (typeof id !== "string") return res.json({
        ok: false,
        result: {
            msg: "ID invalido!"
        }
    });

    try {

        const new_inmueble = await Inmueble.findByIdAndUpdate(id, filters, {
            upsert: true,
            new: true
        });

        return res.json({
            ok: true,
            result: [
                new_inmueble.toJSON({
                    versionKey: false,
                    flattenMaps: true,
                    flattenObjectIds: true
                })
            ]
        });
    } catch (error) {
        return res.json({
            ok: false,
            result: {
                msg: "Error al actualizar el inmueble!"
            }
        });
    }

}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export async function deleteInmueble(req, res, next) {

    const { id } = req.params;

    if (typeof id !== "string") return res.json({
        ok: false,
        result: {
            msg: "ID invalido!"
        }
    });

    try {
        const inmueble = await Inmueble.findByIdAndDelete(id);

        return res.json({
            ok: true,
            result: [inmueble.toJSON({
                versionKey: false,
                flattenMaps: true,
                flattenObjectIds: true
            })]
        });
    } catch (error) {
        return res.json({
            ok: false,
            result: {
                msg: `No se pudo encontrar el inmueble con el ID '${id}'`
            }
        });
    }

}