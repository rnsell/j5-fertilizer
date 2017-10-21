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
const { Observable } = require("rxjs");

const startPumpEpic = (action$) => action$
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

const completePumpEpic = (action$) => action$
    .ofType(MOTOR_TRANSACTION_END)
    .take(4)
    .takeLast(1)
    .map(() => {
        pumpsComplete()
    });

module.exports = {
    startPumpEpic,
    completePumpEpic
};
