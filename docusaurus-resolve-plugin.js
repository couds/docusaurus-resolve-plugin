module.exports = function (_, options) {
  const opts = options || { modules: [], alias: {} };
  return {
    name: "docusaurus-resolve-plugin",
    configureWebpack(_, isServer, utils) {
      return {
        resolve: {
          modules: [
            "node_modules",
          ].concat(opts.modules || []),
          alias: opts.alias || {},
        },
      };
    },
  };
};
