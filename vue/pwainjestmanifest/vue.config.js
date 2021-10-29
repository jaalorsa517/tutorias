module.exports = {
  pwa: {
    name: "MyApp",
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/sw.js",
      swDest: "service-worker.js",
    },
  },
};
