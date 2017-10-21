
const MOTOR_STATES = {
    PUMPING: "PUMPING",
    ERROR: "ERROR",
    COMPLETE: "COMPLETE"
};

const MOTOR_NAMES = {
    board1_motorA: "board1_motorA",
    board1_motorB: "board1_motorB",
    board2_motorA: "board2_motorA",
    board2_motorB: "board2_motorB" 
};

function MotorTransaction({pumpTransactionId, motorName, totalVolume}) {
    this.id = (new Date()).getTime();
    this.pumpTransactionId = pumpTransactionId;
    this.motorName = motorName;
    this.totalVolume = totalVolume;
    this.currentVolume = 0;
    this.state = MOTOR_STATES.PUMPING;
}

module.exports = {
    MotorTransaction,
    MOTOR_STATES,
    MOTOR_NAMES
};