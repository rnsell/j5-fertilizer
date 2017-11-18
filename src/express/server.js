const { createExpressApp } = require("./app.js");

const startWebServer = ({ dependencies, PORT }) => {
    const server = createExpressApp({dependencies});
    server.listen(PORT, () =>{
        console.log(`Server listening on port: ${PORT}`);
    });
};

module.exports = {
    startWebServer 
};