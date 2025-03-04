
import { AppError } from "./AppError.js";
const errorHandler = (err, req, res, next) => {

    console.log(err);
    

    if (err.name === "ValidationError") {
        return res.status(500).json({ status: "error", message: err.message });
    }

    if (err.name === "ValidatorError") {
        return res.status(500).json({ status: "error", message: err.message });
    }

    if (err.name === "CastError") {
        return res.status(500).json({ status: "error", message: err.message });
    }

    if (err instanceof AppError) {
        return res.status(err.statusCode).json({ status: "error", message: err.message, errorCode: err.errorCode });
    }
    
    return res.status(500).json({ status: "error", message: "Internal Server Error", error: err });
}

export default errorHandler;