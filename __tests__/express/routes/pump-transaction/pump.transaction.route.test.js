const { createExpressApp } = require("../../../../src/express/app.js");
const request = require("supertest");
const sinon = require("sinon");

describe("src/express/routes/pump.transaction.route.test.js", () => {
    test("Verify dispatch is called.", (done) => {
        const dependencies = {
            store: {},
            dispatch: sinon.spy()
        };
        const body = {
        };
        const server = createExpressApp({dependencies});
        request(server)
        .put("/pump-transaction")
        .send(body)
        .expect(200)
        .end(function(err) {
          if (err) {
              done(err);
          } else {
            //   console.log(res.body);
              expect(dependencies.dispatch.called).toBe(true);
              done();
          }
        });
        // console.log(server);
        // server.close();
    });
});



