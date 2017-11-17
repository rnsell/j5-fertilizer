
const { fastAction } = require("../src/action.creator.utils.js");
describe("src/action.creator.utils.js", () => {
    test("Fast action creator test", () => {
        const type = "TEST_TYPE";
        const payload = "TEST_PAYLOAD";
        const action = fastAction(type)(payload);
        expect(action.type).toEqual(type);
        expect(action.payload).toEqual(payload);
    });
});