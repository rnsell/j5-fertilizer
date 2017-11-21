const { Router } = require("express");
const { PumpTransaction } = require("../../../pump-transaction/pump.transaction.model.js");
const { pumpsStarted } = require("../../../pump-transaction/pump.transaction.actions.js");
const router = new Router();

const newPumpTransaction = (req, res) => {
    const { dependencies, body } = req;
    const { dispatch } = dependencies;
    const  { motorVolumes } = body;
    console.log(body);
    const newPumpTransaction = new PumpTransaction({motorVolumes});
    console.log(newPumpTransaction);
    const action = pumpsStarted(newPumpTransaction);
    res.send(dispatch(action));
};

const pumpTransactionRoute = router.put("/", newPumpTransaction);

module.exports = {
    pumpTransactionRoute,
    newPumpTransaction
};

