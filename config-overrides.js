const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    "react/jsx-runtime": path.resolve(__dirname, "node_modules/react/jsx-runtime.js"),
    "react/jsx-dev-runtime": path.resolve(__dirname, "node_modules/react/jsx-dev-runtime.js"),
  })
); 