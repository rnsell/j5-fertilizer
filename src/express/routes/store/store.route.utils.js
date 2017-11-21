

const extractStoreState = ({store}) => {
    const storeState = store.getState();
    const {
        board1_motorA,
        board1_motorB,
        board2_motorA,
        board2_motorB,
        motor_transactions,
        pump_transaction
     } = storeState;
    const returnBody = {
        motor_transactions,
        pump_transaction
    };
    returnBody.board1_motorA = board1_motorA.speed;
    returnBody.board1_motorB = board1_motorB.speed;
    returnBody.board2_motorA = board2_motorA.speed;
    returnBody.board2_motorB = board2_motorB.speed;
    return returnBody;
};

module.exports = {
    extractStoreState
};