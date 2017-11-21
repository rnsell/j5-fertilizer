const { combineEpics } = require("redux-observable");
const { startMotorsEpic } = require("../motor-transaction/motor.transaction.epics.js");
const { startPumpEpic, completePumpEpic } = require("../pump-transaction/pump.transaction.epics.js");

const rootEpic = combineEpics(startMotorsEpic, startPumpEpic, completePumpEpic);

module.exports = {
    rootEpic
};