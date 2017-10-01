
const Rx = require("rxjs");
const { Observable } = Rx;
const five = require("johnny-five");
const ports = [
  { id: "RIGHT_BOARD" },
  { id: "LEFT_BOARD" }
];

if(process.platform === "darwin") {
	ports[0].port = "/dev/cu.usbmodem1411";
	ports[1].port = "/dev/cu.usbmodem1421";
}

const boardOpts = {
	ports,
	repl: false
}

const configs = five.Motor.SHIELD_CONFIGS.ARDUINO_MOTOR_SHIELD_R3_1;
const boards = five.Boards(boardOpts);
const runMotorforS$H = (ms) => (motor) => {
	motor.start(255);
	setTimeout(() => {
		motor.stop();
	}, ms*1000);
};
const boardReady$ = Observable.create((observ) => {
  boards.on("ready", function () {
    const allTheBoards = [];
    const extractBoards$H = (array) => function (board) {
      array.push(board);
	};
	this.each(extractBoards$H(allTheBoards));		
    observ.next(allTheBoards);
  });
});

boardReady$
  .map(allTheBoards => {
		const pinBoardMap$H = (pins) => (board) => new five.Motor({ pins, board })
		const aMotors = allTheBoards.map(pinBoardMap$H(configs.A.pins));
		const bMotors = allTheBoards.map(pinBoardMap$H(configs.B.pins));
		const motor_board1A = aMotors[0];
		const motor_board1B = bMotors[0];
		const motor_board2A = aMotors[1];
		const motor_board2B = bMotors[1];
		return {motor_board1A, motor_board1B, motor_board2A, motor_board2B}
  })
  .subscribe(
    ({motor_board1A, motor_board1B, motor_board2A, motor_board2B}) => {
		runMotorforS$H(60)(motor_board1A);
    },
    console.error,
    () => console.log("Done")
  );


// board1.on("ready", () => {
// 	var motorA = new five.Motor(configs.A);
// 	console.log(configs.A);
// 	motorA.forward(255);
// 	setTimeout(() => {
// 		motorA.stop();
// 	}, 60*1000);
// });

// board2.on("ready", () => {
// 	var motorA = new five.Motor(configs.A);
// 	console.log(configs.A);
// 	motorA.forward(255);
// 	setTimeout(() => {
// 		motorA.stop();
// 	}, 60*1000);
// });
