const { MOTOR_NAMES }= require("./motor.transaction.model.js");
const { Observable } = require("rxjs/Rx");

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

/**
 * generatePumpEvents
 *
 * @param {Object} obj - An object.
 * @param {number} obj.clockTime - Property 1.
 * @param {number} obj.pumpSpeed - Property 2.
 * @param {number} obj.totalVolume - Property 2.
 * @return {Observable} - Observable that emits 1 event the otal volume after done pumping.
 */
const generatePumpEvents = function ({clockTime, pumpSpeed, totalVolume}) {
    return Observable.interval(clockTime)
    .map((timeIncrement) => {
        const totalTime = timeIncrement * clockTime;
        const currentVolume = pumpSpeed * totalTime;
        return currentVolume;
    })
    .takeWhile(currentVolume => {
        currentVolume < totalVolume;
    })
    .takeLast(1);
};


module.exports = {
    selectTheMotor,
    generatePumpEvents
};