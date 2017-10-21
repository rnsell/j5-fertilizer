const {
    PUMP_TRANSACTION_START,
    pumpsComplete
} = require("./pump.transaction.actions.js");

const {
    mapPumpTransactionToMotorTransaction
} = require("./pump.transaction.epic.util.js");

const {
    startMotorTransaction,
    MOTOR_TRANSACTION_END
} = require("../motor-transaction/motor.transaction.actions.js");

const {
    PUMP_STATES
} = require("./pump.transaction.model.js");
const { Observable } = require("rxjs");

const startPumpEpic = (action$, store) => action$
    .filter(() => {
        const pumpState = store.getState().pump_transaction.state;
        return pumpState === PUMP_STATES.READY || pumpState === PUMP_STATES.COMPLETE;
    })
    .ofType(PUMP_TRANSACTION_START)
    .mergeMap(({ payload }) => {
        const { 
            pumpTransactionId,
            board1_motorA_volume,
            board1_motorB_volume,
            board2_motorA_volume,
            board2_motorB_volume
        } = payload;
        const pumpTransactions = mapPumpTransactionToMotorTransaction({
            pumpTransactionId,
            board1_motorA_volume,
            board1_motorB_volume,
            board2_motorA_volume,
            board2_motorB_volume
        })
        .map(startMotorTransaction);
        return Observable.from(pumpTransactions);
    });

const completePumpEpic = (action$, store) => action$
    .ofType(MOTOR_TRANSACTION_END)
    // If the store has added all 4 motor transactions then this is the last one
    .filter(() => {
        return store.getState().motor_transactions.length === 4;
    })
    .map(() => pumpsComplete({}));

module.exports = {
    startPumpEpic,
    completePumpEpic
};
