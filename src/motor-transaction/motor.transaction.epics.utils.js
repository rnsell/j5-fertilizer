const { MOTOR_NAMES }= require("./motor.transactions.models.js");

const selectTheMotor = (
    {
        board1_motorA,
        board1_motorB,
        board2_motorA,
        board2_motorB
    },
    {   
        motorName
    }
) => {
    let selectedMotor;
    switch(motorName) {
        case MOTOR_NAMES.board1_motorA:
            selectedMotor = board1_motorA;
            break;
        case MOTOR_NAMES.board1_motorB:
            selectedMotor = board1_motorB;
            break;
        case MOTOR_NAMES.board2_motorA:
            selectedMotor = board2_motorA;
            break;
        case MOTOR_NAMES.board2_motorB:
            selectedMotor = board2_motorB;
            break;    
    }

    return selectedMotor;
};

module.exports = {
    selectTheMotor
};