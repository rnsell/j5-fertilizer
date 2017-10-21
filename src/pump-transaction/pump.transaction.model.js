
const PUMP_STATES = {
    RUNNING: "RUNNING",
    ERROR: "ERROR",
    COMPLETE: "COMPLETE",
    READY: "READY"
};

// Expected input
// {
//     state,
//     motorVolumes: {
//         board1_motorA_volume, 
//         board1_motorB_volume, 
//         board2_motorA_volume, 
//         board2_motorB_volume
//     }
// }
function PumpTransaction({ state = PUMP_STATES.RUNNING, motorVolumes}) {
    const { 
        board1_motorA_volume,
        board1_motorB_volume,
        board2_motorA_volume,
        board2_motorB_volume 
    } = motorVolumes;

    this.pumpTransactionId = (new Date()).getTime();
    this.state = state;
    this.board1_motorA_volume = board1_motorA_volume;
    this.board1_motorB_volume = board1_motorB_volume;
    this.board2_motorA_volume = board2_motorA_volume;
    this.board2_motorB_volume = board2_motorB_volume;
}

module.exports = {
    PumpTransaction,
    PUMP_STATES
};