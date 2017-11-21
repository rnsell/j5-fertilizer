const { Router } = require("express");

const router = new Router();

const healthCheck = (req, res) => {
    const responseBody = {
        message: "Online and working",
        time: new Date()
    };

    res.send(responseBody);
};

const healthCheckRoute = router.get("/", healthCheck);

module.exports = {
    healthCheck,
    healthCheckRoute
};
