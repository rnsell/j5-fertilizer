const { motorTransactionReducer } = require("../../src/motor-transaction/motor.transaction.reducers");

describe("src/motor-transaction/motor.transaction.reducers", () => {
    test("Default state", () => {
        const defaultState = motorTransactionReducer(undefined, {type: "FAKE_TYPE"});
        expect(Array.isArray(defaultState)).toEqual(true);
    });
});