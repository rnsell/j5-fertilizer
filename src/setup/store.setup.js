const { createStore, applyMiddleware } = require("redux");
const { rootReducer } = require("./reducer.setup.js");
const { rootEpic } = require("./epic.setup.js");
const { createEpicMiddleware } = require("redux-observable");

const epicMiddleWare = createEpicMiddleware(rootEpic, {});

const store = createStore(rootReducer, applyMiddleware(epicMiddleWare));

module.exports = {
    store
};