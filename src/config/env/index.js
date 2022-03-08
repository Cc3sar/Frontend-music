const env = process.env.REACT_APP_NODE_ENV || "development";

const appConfig = require(`./${ env }`).default;

export default appConfig;