
const dependencyMiddleware$H = ({ dependencies }) => (req, res, next) => {
    req.dependencies = dependencies;
    next();
};

module.exports = dependencyMiddleware$H;