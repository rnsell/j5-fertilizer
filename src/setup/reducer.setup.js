const { combineReducers } = require("redux");
const { board1MotorAReducer: board1_motorA,
    board1MotorBReducer: board1_motorB,
    board2MotorAReducer: board2_motorA,
    board2MotorBReducer: board2_motorB
} = require("../motors/motors.reducers");

const rootReducer = combineReducers({
    board1_motorA,
    board1_motorB,
    board2_motorA,
    board2_motorB
});

module.exports = {
    rootReducer
};