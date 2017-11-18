const { createExpressApp } = require("../../../../src/express/app.js");
const request = require("supertest");


describe("src/express/routes/store.route.js", () => {
    test("Sanity check", (done) => {
        const getState = () => ({
            pump1: "pump"
        });
        const dependencies = {
            store: { getState },
            dispatch: () => {}
        };
        const server = createExpressApp({dependencies});
        request(server)
        .get("/store")
        .expect(200)
        .end(function(err, res) {
          if (err) {
              done(err);
          } else {
            //   console.log(res.body);
              expect(res.body.pump1).toBe(getState().pump1);
              done();
          }
        });
        // console.log(server);
        // server.close();
    });
});


