const { combineReducers } = require("redux");
const { 
    board1MotorAReducer: board1_motorA,
    board1MotorBReducer: board1_motorB,
    board2MotorAReducer: board2_motorA,
    board2MotorBReducer: board2_motorB
} = require("../motors/motors.reducers");
const { motorTransactionReducer: motor_transactions } = require("../motor-transaction/motor.transaction.reducers");
const { pumpTransactionReducer: pump_transaction } = require("../pump-transaction/pump.transaction.reducers.js");
const rootReducer = combineReducers({
    board1_motorA,
    board1_motorB,
    board2_motorA,
    board2_motorB,
    motor_transactions,
    pump_transaction
});

module.exports = {
    rootReducer
};