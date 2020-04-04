cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-pedometer.Pedometer",
      "file": "plugins/cordova-plugin-pedometer/www/pedometer.js",
      "pluginId": "cordova-plugin-pedometer",
      "clobbers": [
        "pedometer"
      ]
    },
    {
      "id": "cordova-plugin-stepcounter.stepcounter",
      "file": "plugins/cordova-plugin-stepcounter/www/stepcounter.js",
      "pluginId": "cordova-plugin-stepcounter",
      "clobbers": [
        "stepcounter"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-pedometer": "0.4.1",
    "cordova-plugin-stepcounter": "1.0.0"
  };
});