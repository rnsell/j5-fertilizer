const { fastAction } = require("../action.creator.utils.js");

const MOTOR_TRANSACTION_START = "MOTOR_TRANSACTION_START";
const startMotorTransaction = fastAction(MOTOR_TRANSACTION_START);

const MOTOR_TRANSACTION_END = "MOTOR_TRANSACTION_END";
const endMotorTransaction = fastAction(MOTOR_TRANSACTION_END);

const MOTOR_TRANSACTION_ERROR = "MOTOR_TRANSACTION_ERROR";
const errorMotorTransaction = fastAction(MOTOR_TRANSACTION_ERROR);

module.exports = {
    MOTOR_TRANSACTION_START,
    startMotorTransaction,
    MOTOR_TRANSACTION_END,
    endMotorTransaction,
    MOTOR_TRANSACTION_ERROR,
    errorMotorTransaction
};