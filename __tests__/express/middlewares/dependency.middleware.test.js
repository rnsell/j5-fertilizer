

const { dependencyMiddleware$H } = require("../../../src/express/middlewares/dependency.middleware.js");
const sinon = require("sinon");

describe("src/express/middlewares/dependency.middleware.js", () => {
    test("Should append dependencies to ", () => {
        const store = {};
        const dispatch = sinon.spy();
        const dependencies = {
            store,
            dispatch
        };
        const middleware = dependencyMiddleware$H({dependencies});
        const req = {};
        const res = {};
        const next = sinon.spy();
        middleware(req, res, next);
        expect(next.called).toBe(true);

    });
});
