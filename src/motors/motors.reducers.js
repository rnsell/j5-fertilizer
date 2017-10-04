const { UPDATE_MOTOR } = require("./motors.actions.js");

const defaultState = {
    speed: null,
    controller: null
};

const board1MotorAReducer = (state = defaultState, action) => {
    const { type, payload } = action;
    let returnValue = state;
    if (type === UPDATE_MOTOR) {
        returnValue = Object.create(payload);
    }
    return returnValue;
};

const board1MotorBReducer = (state = defaultState, action) => {
    const { type, payload } = action;
    let returnValue = state;
    if (type === UPDATE_MOTOR) {
        returnValue = Object.create(payload);
    }
    return returnValue;
};

const board2MotorAReducer = (state = defaultState, action) => {
    const { type, payload } = action;
    let returnValue = state;
    if (type === UPDATE_MOTOR) {
        returnValue = Object.create(payload);
    }
    return returnValue;
};

const board2MotorBReducer = (state = defaultState, action) => {
    const { type, payload } = action;
    let returnValue = state;
    if (type === UPDATE_MOTOR) {
        returnValue = Object.create(payload);
    }
    return returnValue;
};

module.exports = {
    board1MotorAReducer,
    board1MotorBReducer,
    board2MotorAReducer,
    board2MotorBReducer
};