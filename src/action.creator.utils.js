const fastAction = (type) => (payload) => ({type, payload});

module.exports = { fastAction };