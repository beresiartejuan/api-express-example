/**
 * @name setApiHeaders
 * @param {import("express").Request} _ 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
export default function setApiHeaders(_, res, next) {
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    next();
};