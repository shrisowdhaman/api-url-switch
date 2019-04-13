var fs = require('fs');
var path = require('path');
var dir = require('node-dir');

const apiUrlSwitch = require('./src/api-url-switch.js');

// Src and Desc file names
var srcFile = '';
var descFile = '';

// Directory home path
const distDirPath = path.join(__dirname, '/dist/');

// Get content from file
var API_URL_CONFIG;
// Define to JSON type
var apiUrlConfig;

if(fs.existsSync(__dirname + "/api_url_config.json")) {
  API_URL_CONFIG = fs.readFileSync(__dirname + "/api_url_config.json")
  apiUrlConfig = JSON.parse(API_URL_CONFIG);
}


// Check api_url_config.json file
if (apiUrlConfig){
   srcFile = apiUrlConfig.src_api;
   descFile = apiUrlConfig.desc_api;
} else  if (process.argv.length <= 3 ) {
    srcFile = process.argv[2];
    descFile = process.argv[3];
}


if ( srcFile !== null && descFile !== null) {

    apiUrlSwitch.startSwitching(srcFile, descFile);
}
