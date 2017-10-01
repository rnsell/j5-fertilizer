const Rx = require("rxjs");
const { Observable } = Rx;
const five = require('johnny-five');
const ports = [
  { id: "RIGHT_BOARD" },
  { id: "LEFT_BOARD" }
];
const configs = five.Motor.SHIELD_CONFIGS.ARDUINO_MOTOR_SHIELD_R3_1;

const boards = new five.Boards(ports);
const boardReady$ = Rx.Observable.from((next) => {
	boards.on("ready", () => {
		const allTheBoards = [];
		const extractBoards = (array) => function (board) {
			console.log(board);
			array.push(board);
		};
		this.each(extractBoards(array))
		next(allTheBoards);
	});
});

boardReady$
	.subscribe((value) => {
		console.log(boards);
		console.log(value);
	})


/**
board.on('ready', () => {
	var motorA = new five.Motor(configs.A);
	console.log(configs.A);
	motorA.forward(255);
	setTimeout(() => {
		motorA.stop();
	}, 60*1000)
})
* **/
