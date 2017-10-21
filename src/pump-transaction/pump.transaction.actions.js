const { factAction } = require("../action.creator.utils.js");

// PUMP_TRANSACTION_START
// volume: {
    // board1_motorA: ml,
    // board1_motorB: ml,
    // board2_motorA: ml,
    // board2_motorB: ml
//}
// error: error,
// state: running, error, complete

const PUMP_TRANSACTION_START = "PUMP_TRANSACTION_START";
const pumpsStarted = factAction(PUMP_TRANSACTION_START);

const PUMP_TRANSACTION_ERROR = "PUMP_TRANSACTION_ERROR";
const pumpsError = factAction(PUMP_TRANSACTION_ERROR);

const PUMP_TRANSACTION_COMPLETE = "PUMP_TRANSACTION_COMPLETE";
const pumpsComplete = factAction(PUMP_TRANSACTION_COMPLETE);

module.exports = {
    PUMP_TRANSACTION_START,
    pumpsStarted,
    PUMP_TRANSACTION_ERROR,
    pumpsError,
    PUMP_TRANSACTION_COMPLETE,
    pumpsComplete
};