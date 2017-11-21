const {   
    UPDATE_BOARD1_MOTORA,
    UPDATE_BOARD1_MOTORB,
    UPDATE_BOARD2_MOTORA,
    UPDATE_BOARD2_MOTORB
 } = require("./motors.actions.js");

const defaultState = {
    speed: null,
    controller: null
};

const board1MotorAReducer = (state = defaultState, action) => {
    const { type, payload } = action;
    let returnValue = state;
    if (type === UPDATE_BOARD1_MOTORA) {
        returnValue = Object.assign({}, payload);
    }
    return returnValue;
};

const board1MotorBReducer = (state = defaultState, action) => {
    const { type, payload } = action;
    let returnValue = state;
    if (type === UPDATE_BOARD1_MOTORB) {
        returnValue = Object.assign({}, payload);
    }
    return returnValue;
};

const board2MotorAReducer = (state = defaultState, action) => {
    const { type, payload } = action;
    let returnValue = state;
    if (type === UPDATE_BOARD2_MOTORA) {
        returnValue = Object.assign({}, payload);
    }
    return returnValue;
};

const board2MotorBReducer = (state = defaultState, action) => {
    const { type, payload } = action;
    let returnValue = state;
    if (type === UPDATE_BOARD2_MOTORB) {
        returnValue = Object.assign({}, payload);
    }
    return returnValue;
};

module.exports = {
    board1MotorAReducer,
    board1MotorBReducer,
    board2MotorAReducer,
    board2MotorBReducer
};