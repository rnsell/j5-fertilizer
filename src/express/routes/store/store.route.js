const { Router } = require("express");

const router = new Router();

const getStore = (req, res) => {
    // const { dependencies } = req;
    // const { dispatch } = dependencies;

    res.send({message: "Hello"});
};

const storeRoute = router.get("/", getStore);

module.exports = {
    storeRoute,
    getStore
};
