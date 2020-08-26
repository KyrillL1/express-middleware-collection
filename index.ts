import applyBodyParser from './lib/bodyParse';
import applyCompression from './lib/compression';
import applyCors from './lib/cors';
import applyErrorHandler from './lib/errorHandler';
import applyLoggingRequests from './lib/logRequests';

export {
    applyBodyParser,
    applyCompression,
    applyCors,
    applyErrorHandler,
    applyLoggingRequests
}