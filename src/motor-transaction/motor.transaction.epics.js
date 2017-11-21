const { 
    MOTOR_TRANSACTION_START,
    endMotorTransaction
 } = require("./motor.transaction.actions.js");
 const {
    MOTOR_STATES
 } = require("./motor.transaction.model.js");
const { selectTheMotor, generatePumpEvents } = require("./motor.transaction.epics.utils.js");

const startMotorsEpic = (action$, store) => action$
    .ofType(MOTOR_TRANSACTION_START)
    .mergeMap(({ payload }) => {
        const { 
            motorName,
            totalVolume
        } = payload;
        
        const theMotor = selectTheMotor(store.getState(), { motorName });
        
        const { speed: pumpSpeed, controller } = theMotor;
        controller.start(255);
        const clockTime = 100;
        
        // This is in ms
        // Emits an event after the p
        return generatePumpEvents({clockTime, pumpSpeed, totalVolume})
            .map((totalVolume) => {
                controller.stop();
                const finishedMotorTransaction = Object.assign({}, payload);
                finishedMotorTransaction.state = MOTOR_STATES.COMPLETE;
                finishedMotorTransaction.currentVolume = totalVolume;
                return endMotorTransaction(finishedMotorTransaction);
            });
        
    });


module.exports = {
    startMotorsEpic
};