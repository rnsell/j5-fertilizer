const boardReady$ = require("../setup/board.setup.js");
const { store } = require("./setup/store.setup.js");
const { dispatch } = store;
const { updateBoard1MotorA,
	updateBoard1MotorB,
	updateBoard2MotorA,
	updateBoard2MotorB } = require("../motors.actions.js");
const { board1, board2 }	= require("../setup/pump.sppeds.setup.js");


const next = (allTheMotors) => {
	const { board1_motorA, board1_motorB, board2_motorA, board2_motorB } = allTheMotors;
	const futureActions = [
		updateBoard1MotorA({speed: board1.motorA, controller: board1_motorA}),
		updateBoard1MotorB({speed: board1.motorB, controller: board1_motorB}),
		updateBoard2MotorA({speed: board2.motorA, controller: board2_motorA}),
		updateBoard2MotorB({speed: board2.motorB, controller: board2_motorB})
	];
	futureActions.forEach(dispatch);
};

const error = (err) => {
	console.error(err);
};

const shutdown = () => {
	console.log("Application terminated.");
};


boardReady$
	.subscribe(next, error, shutdown);