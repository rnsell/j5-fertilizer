const { startWebServer } = require("../../src/express/server.js");
let server;

describe("src/express/server.test.js", () => {
    test("Sanity check", () => {
        const PORT = 3000;
        const dependencies = {
            store: {},
            dispatch: () => {}
        };
        server = startWebServer({PORT, dependencies});
    });
    afterAll(() => {
        server.close();
    });
});