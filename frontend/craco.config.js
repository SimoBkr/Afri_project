const CracoAntDesignPlugin = require("craco-antd");
const path = require("path");

process.env.BROWSER = "none"; // optional, disables auto-open every time you restart

module.exports = {
  jest: {
    configure(config) {
      config.transformIgnorePatterns = [
        "/node_modules/(?!antd|rc-pagination|rc-calendar|rc-tooltip)/.+\\.js$",
      ];
      return config;
    },
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath: path.join(
          __dirname,
          "src/assets/style/antd.customize.less"
        ),
      },
    },
  ],
};
