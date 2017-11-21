const { fastAction } = require("../action.creator.utils.js");

const UPDATE_BOARD1_MOTORA = "UPDATE_BOARD1_MOTORA";
const updateBoard1MotorA = fastAction(UPDATE_BOARD1_MOTORA);

const UPDATE_BOARD1_MOTORB = "UPDATE_BOARD1_MOTORB";
const updateBoard1MotorB = fastAction(UPDATE_BOARD1_MOTORB);

const UPDATE_BOARD2_MOTORA = "UPDATE_BOARD2_MOTORA";
const updateBoard2MotorA = fastAction(UPDATE_BOARD2_MOTORA);

const UPDATE_BOARD2_MOTORB = "UPDATE_BOARD2_MOTORB";
const updateBoard2MotorB = fastAction(UPDATE_BOARD2_MOTORB);

module.exports = {
    UPDATE_BOARD1_MOTORA,
    updateBoard1MotorA,
    UPDATE_BOARD1_MOTORB,
    updateBoard1MotorB,
    UPDATE_BOARD2_MOTORA,
    updateBoard2MotorA,
    UPDATE_BOARD2_MOTORB,
    updateBoard2MotorB
};