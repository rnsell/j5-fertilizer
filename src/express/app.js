var express = require("express");
var server = express();
var bodyParser = require("body-parser");
const { dependencyMiddleware$H } = require("./middlewares/dependency.middleware.js");
const { storeRoute } = require("./routes/store/store.route.js");
const { pumpTransactionRoute } = require("./routes/pump-transaction/pump.transaction.route.js");
const { healthCheckRoute } = require("./routes/health/health.route.js");

const createExpressApp = ({ dependencies }) => {
    const depMiddleware = dependencyMiddleware$H({ dependencies });
    const jsonMiddleware = bodyParser.json();

    server.use(depMiddleware);
    server.use(jsonMiddleware);
    server.use("/store", storeRoute);
    server.use("/pump-transaction", pumpTransactionRoute);
    server.use("/health", healthCheckRoute);
    return server;
};


module.exports = {
    createExpressApp
};

