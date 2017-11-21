const five = require("johnny-five");
const Rx = require("rxjs");
const { Observable } = Rx;
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
};

const configs = five.Motor.SHIELD_CONFIGS.ARDUINO_MOTOR_SHIELD_R3_1;
const boards = five.Boards(boardOpts);

const boardReady$ = Observable.create((observer) => {
  boards.on("ready", function () {
    const allTheBoards = [];
    const extractBoards$H = (array) => (board) => {
      array.push(board);
	  };
    this.each(extractBoards$H(allTheBoards));		
    observer.next(allTheBoards);
  });
})
.map((allTheBoards) => {
    const pinBoardMap$H = (pins) => (board) => new five.Motor({ pins, board });
    const aMotors = allTheBoards.map(pinBoardMap$H(configs.A.pins));
    const bMotors = allTheBoards.map(pinBoardMap$H(configs.B.pins));
    const board1_motorA = aMotors[0];
    const board1_motorB = bMotors[0];
    const board2_motorA = aMotors[1];
    const board2_motorB = bMotors[1];
    return { board1_motorA, board1_motorB, board2_motorA, board2_motorB };
});

module.exports = {
    boardReady$
};