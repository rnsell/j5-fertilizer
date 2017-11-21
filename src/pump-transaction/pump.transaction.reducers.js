const { 
  PUMP_TRANSACTION_RUNNING,
  PUMP_TRANSACTION_ERROR,
  PUMP_TRANSACTION_COMPLETE,
} = require("./pump.transaction.actions.js");
const { PUMP_STATES } = require("./pump.transaction.model.js");
const defaultState = {
    state: PUMP_STATES.READY
};
const pumpTransactionReducer = (state = defaultState, action) => {
    const { type, payload } = action;
    const newState = Object.assign({}, state);
    switch(type) {
        case PUMP_TRANSACTION_RUNNING: 
            newState.state = PUMP_STATES.RUNNING;
            return newState;
        case PUMP_TRANSACTION_COMPLETE:
            newState.state = PUMP_STATES.COMPLETE;
            return newState;
        case PUMP_TRANSACTION_ERROR:
            newState.error = payload;
            newState.state = PUMP_STATES.ERROR;
            return newState;
        default:
            return state;
    }
};


module.exports = { 
    pumpTransactionReducer
};