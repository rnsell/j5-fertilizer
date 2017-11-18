const { Router } = require("express");

const router = new Router();

const newPumpTransaction = (req, res) => {
    const { dependencies, body } = req;
    const { dispatch } = dependencies;
    res.send(dispatch(body));
};

const pumpTransactionRoute = router.put("/", newPumpTransaction);

module.exports = {
    pumpTransactionRoute,
    newPumpTransaction
};

