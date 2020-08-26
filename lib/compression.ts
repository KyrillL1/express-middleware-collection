import { Application } from "express";
import compression from "compression";

/**
 * Add compression to your application.
 * @param app 
 */
const applyCompression = (app: Application) => {
    app.use(compression());
}

export default applyCompression;