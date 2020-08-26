import { Application } from "express";

/**
 * Add logging of requests made to your app
 * @param app 
 * @param logger {any Logger} The logger should have a logger.info() method
 */
const applyLogging = (app: Application, logger) => {
    app.use((req, res, next) => {
        logger.log(`Request ${req.method} at ${req.url}`);
        next();
    });
}

export default applyLogging;