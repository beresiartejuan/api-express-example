import { validationResult, checkSchema, matchedData } from "express-validator";
import status from "http-status";
import errorMaker from "./../../services/errorMaker.js";

function validateRules(validations = checkSchema({})) {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (result.errors?.length) break;
        }

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            const error = errors.array()[0];

            next(new errorMaker(
                status.BAD_REQUEST,
                {
                    message: error.msg,
                    field: error.path,
                    value: error.value
                }
            ));

            return;
        }

        req.validated = matchedData(req);

        next();
    };
};

export default validateRules;