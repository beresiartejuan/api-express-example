import errorMaker from "../../services/errorMaker.js"
import status from "http-status";

/**
 * @name handlerError
 * @param {any} error
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
export default function handlerApiError(error, req, res, next) {

    if (!error) next(error);

    res.type("json");

    if (error instanceof errorMaker) {
        res.status(error.status_code);
        return res.json({
            status: error.status_code,
            ok: false,
            error: error.error
        });
    }

    if (typeof error === "number") {

        res.status(error);
        return res.json({
            status: error,
            ok: false
        });

    }

    if (typeof error === "string") {

        res.status(status.INTERNAL_SERVER_ERROR);
        return res.json({
            status: status.INTERNAL_SERVER_ERROR,
            ok: false,
            message: error
        });

    }

    console.error(error);

    res.status(status.INTERNAL_SERVER_ERROR);
    return res.json({
        status: status.INTERNAL_SERVER_ERROR,
        ok: false,
        message: status["500_MESSAGE"]
    });

};