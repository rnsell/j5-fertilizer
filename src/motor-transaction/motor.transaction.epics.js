const { 
    MOTOR_TRANSACTION_START,
    endMotorTransaction
 } = require("./motor.transaction.actions.js");
 const {
    MOTOR_STATES
 } = require("./motor.transaction.model.js");
const { selectedMotor } = require("./motor.transaction.epics.utils.js");
const { Observable } = require("rxjs/Rx");

const startMotorEpic = (action$, store) => action$
    .ofType(MOTOR_TRANSACTION_START)
    .mergeMap(({ payload }) => {
        const { 
            // pumpTransactionId,
            motorName,
            totalVolume
        } = payload;
        
        const theMotor = selectedMotor(store.getState(), { motorName });
        const { speed, controller } = theMotor;
        controller.start(255);
        const clockTime = 100;
        
        // This is in ms
        return Observable.interval(clockTime)
            .map((timeIncrement) => {
                const totalTime = timeIncrement * clockTime;
                const currentVolume = speed*totalTime;
                return currentVolume;
            })
            .takeWhile(currentVolume => {
                currentVolume < totalVolume;
            })
            .takeLast(1)
            .map((totalVolume) => {
                const finishedMotorTransaction = Object.assign({}, payload);
                finishedMotorTransaction.state = MOTOR_STATES.COMPLETE;
                finishedMotorTransaction.currentVolume = totalVolume;
                return endMotorTransaction(finishedMotorTransaction);
            });
        
    });


module.exports = {
    startMotorEpic
}