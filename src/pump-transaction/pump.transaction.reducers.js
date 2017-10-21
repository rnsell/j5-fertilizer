const { 
  PUMP_TRANSACTION_START,
  PUMP_TRANSACTION_ERROR,
  PUMP_TRANSACTION_COMPLETE,
} = require("./pump.transaction.actions.js");
const { PUMP_STATES } = require("./pump.transaction.model.js");
const defaultState = {
    state: PUMP_STATES.READY
};
const pumpTransactionReducer = (state = defaultState, action) => {
    const { type, payload } = action;
    switch(type) {
        case PUMP_TRANSACTION_START: 
            return payload;
        case PUMP_TRANSACTION_COMPLETE:
            state.state = PUMP_STATES.COMPLETE;
            return state;
        case PUMP_TRANSACTION_ERROR:
            state.error = payload;
            state.state = PUMP_STATES.ERROR;
            return state;
        default:
            return state;
    }
};


module.exports = { 
    pumpTransactionReducer
};