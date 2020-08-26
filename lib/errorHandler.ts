import { Application } from "express";

/**
 * This should be just before you start listening on the app
 * So it'll catches all errors passed down the next-chain
 * @param app 
 * @param errorHandler should have a constructor which has a (err, res, next) signature 
 */
const applyErrorHandler = (app:Application, errorHandler) => {
    app.use((err, req, res, next) => {
        errorHandler(err, res, next);
      });
}

export default applyErrorHandler;