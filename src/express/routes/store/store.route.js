const { Router } = require("express");
const { extractStoreState } = require("./store.route.utils.js");
const router = new Router();

const getStore = (req, res) => {
    const { dependencies } = req;
    const { store } = dependencies;
    const responseBody = extractStoreState({store});
    res.send(responseBody);
};

const storeRoute = router.get("/", getStore);

module.exports = {
    storeRoute,
    getStore
};
