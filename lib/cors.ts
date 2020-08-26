import { Application } from "express";
import cors from 'cors';

/**
 * Add CORS middleware to your application.
 * Block all requests apart from those specified in allowedHostNames
 * @param app 
 * @param allowedHostNames 
 */
const applyCORS = (app: Application, allowedHostNames: string[]) => {
    app.use(cors({
        credentials: true,
        origin: (origin, callback) => {
            // disable server-to-server requests (e.g. curl)
            if (!origin) return callback(null, false);

            if (allowedHostNames.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(new Error(`Access blocked for ${origin} due to CORS policy)`), false);
            }
        }
    }));

}

export default applyCORS;