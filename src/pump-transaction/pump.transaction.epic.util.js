const {
    MotorTransaction,
    MOTOR_NAMES,
} = require("../motor-transaction/motor.transaction.model.js");

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
        new MotorTransaction({pumpTransactionId, board1_motorA, board1_motorA_volume}),
        new MotorTransaction({pumpTransactionId, board1_motorB, board1_motorB_volume}),
        new MotorTransaction({pumpTransactionId, board2_motorA, board2_motorA_volume}),
        new MotorTransaction({pumpTransactionId, board2_motorB, board2_motorB_volume})
    ];
    return allTheTransaction;
};

module.exports = {
    mapPumpTransactionToMotorTransaction
};