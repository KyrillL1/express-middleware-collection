import { Application } from "express";
import parser from "body-parser"

/**
 * Add parsing of the body to your app, so it will be accessible via req.body
 * @param app 
 */
const applyBodyParsing = (app: Application) => {
    app.use(parser.urlencoded({ extended: true }))
    app.use(parser.json())
}

export default applyBodyParsing;