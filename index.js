#!/usr/bin/env node

'use strict';

const {
    promisify
} = require('util');
var fs = require('fs');
var path = require('path');
var dir = require('node-dir');

// Src and Desc file names
var srcFile = '';
var descFile = '';

// Directory home path
const distDirPath = path.resolve('./dist/');

// Get content from file
var API_URL_CONFIG;
// Define to JSON type
var apiUrlConfig;
 
 
// Check api_url_config.json file
if (fs.existsSync(path.resolve("./api_url_config.json"))) {

    API_URL_CONFIG = fs.readFileSync(path.resolve("./api_url_config.json"));
    apiUrlConfig = JSON.parse(API_URL_CONFIG);
    srcFile = apiUrlConfig.src_api;
    descFile = apiUrlConfig.desc_api;
} else if (process.argv.length == 4) {
    srcFile = process.argv[2];
    descFile = process.argv[3];
} else {
	console.log('Something wrong not able to process');
    process.ex;
}

var fileName = '';
// File the filepath
fs.readdir(distDirPath, function (err, content) {
    fileName = content.find(res => res.match(/main.*.js/))
});

// Replace main file and replacethe file
dir.readFiles(distDirPath, {
    match: /main.*.js/,
    exclude: /^\./
}, function (err, content, next) {
    if (err) throw err;
	console.log(path.resolve(distDirPath,fileName));
    // Replace logic
    if (srcFile && descFile) {
        var result = replaceAll(srcFile, descFile, content);
        fs.writeFile(path.resolve(distDirPath, fileName), result, 'utf8', function (err) {
            if (err) {
                return console.log(err);
            }else {
                console.log('API URL switch from ',srcFile, 'to', descFile); 
            };
        });
    } else {
        process.ex
    }

});


// Replace All
function replaceAll(find, replace, content) {
    while (content.indexOf(find) > -1) {
        content = content.replace(find, replace);
    }
   return content;
}
