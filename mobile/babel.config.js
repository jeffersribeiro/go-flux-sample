module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".js", ".jsx", ".es6", ".es", ".mjs", "cjs"],
          root: ["./"],
          alias: {
            "@components": "./components",
            "@assets": "./assets",
            "@images": "./assets/images",
            "@constants": "./constants",
            "@contexts": "./contexts",
            "@hooks": "./hooks",
            "@helpers": "./helpers",
            "@interface": "./interface",
            "@navigation": "./navigation",
            "@modules": "./modules",
            "@services": "./services",
            "@shared": "./shared",
          },
        },
      ],
    ],
  };
};
