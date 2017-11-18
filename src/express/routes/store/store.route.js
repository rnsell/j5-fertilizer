const { Router } = require("express");

const router = new Router();

const getStore = (req, res) => {
    const { dependencies } = req;
    const { store } = dependencies;

    res.send(store.getState());
};

const storeRoute = router.get("/", getStore);

module.exports = {
    storeRoute,
    getStore
};
