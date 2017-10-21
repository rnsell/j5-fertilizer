
const { PUMP_TRANSACTION_START } = require("../pump-transaction/pump.transaction.actions.js");
const { MOTOR_TRANSACTION_END } = require("./motor.transaction.actions.js");

const motorTransactionReducer = (state = [], { type, payload }) => {
    switch (type) {
        case PUMP_TRANSACTION_START: 
            state = [];
            break;
        case MOTOR_TRANSACTION_END:
            state.push(payload);
            break;
    }
    return state;
};


module.exports = {
    motorTransactionReducer
};