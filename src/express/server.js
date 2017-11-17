var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const dependencyMiddleware$H = require("./middlewares/dependency.middleware.js");
const { storeRoute } = require("./routes/store.route.js");
const { pumpTransactionRoute } = require("./routes/pump.transaction.route.js");


const startWebServer = ({ dependencies, PORT }) => {
    const depMiddleware = dependencyMiddleware$H({ dependencies });
    const jsonMiddleware = bodyParser.json();

    app.use(depMiddleware);
    app.use(jsonMiddleware);
    app.use("/store", storeRoute);
    app.use("/pump-transaction", pumpTransactionRoute);

    app.listen(PORT, () => {
        console.log(`Server listening on port: ${PORT}`);
    });
};


module.exports = {
    startWebServer
};

