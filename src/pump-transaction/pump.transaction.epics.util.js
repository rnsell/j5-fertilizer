const {
    MotorTransaction,
    MOTOR_NAMES,
} = require("../motor-transaction/motor.transaction.model.js");

/**
 * mapPumpTransactionToMotorTransaction
 *
 * @param {Object} obj - An object.
 * @param {number} obj.pumpTransactionId - Property 1.
 * @param {Object} obj.board1_motorA_volume - Property 2.
 * @param {Object} obj.board1_motorB_volume - Property 2.
 * @param {Object} obj.board2_motorA_volume - Property 2.
 * @param {Object} obj.board2_motorB_volume - Property 2.
 * @return {Array} - Array of motor transactions that need to run
 */
let mapPumpTransactionToMotorTransaction = ({
    pumpTransactionId,
    board1_motorA_volume,
    board1_motorB_volume,
    board2_motorA_volume,
    board2_motorB_volume
}) => {
    const { 
        board1_motorA,
        board1_motorB,
        board2_motorA,
        board2_motorB
    } = MOTOR_NAMES;
    const allTheTransaction = [    
        new MotorTransaction({pumpTransactionId, motorName: board1_motorA, totalVolume: board1_motorA_volume}),
        new MotorTransaction({pumpTransactionId, motorName: board1_motorB, totalVolume: board1_motorB_volume}),
        new MotorTransaction({pumpTransactionId, motorName: board2_motorA, totalVolume: board2_motorA_volume}),
        new MotorTransaction({pumpTransactionId, motorName: board2_motorB, totalVolume: board2_motorB_volume})
    ];
    return allTheTransaction;
};

module.exports = {
    mapPumpTransactionToMotorTransaction
};