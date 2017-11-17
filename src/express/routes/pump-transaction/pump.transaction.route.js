const { Router } = require("express");

const router = new Router();

const newPumpTransaction = (req, res) => {
    // const { dependencies } = req;
    // const { dispatch } = dependencies;

    res.send({message: "Hello"});
};

const pumpTransactionRoute = router.put("/", newPumpTransaction);

module.exports = {
    pumpTransactionRoute,
    newPumpTransaction
};

