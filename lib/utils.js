var fs = require('fs')
  , _ = require('underscore')
  , path = require('path')
  , clc = require('cli-color')

var XPEN_JSON = 'xpen.json'

module.exports = {
  createXpenJson: function (projectPath, configJson) {
    fs.writeFileSync(path.resolve(projectPath, XPEN_JSON)
      , JSON.stringify(configJson, null, 2))
  }
, readXpenJson: function(projectPath) {
    try {
      return (JSON.parse(fs.readFileSync(path.resolve(projectPath || '', XPEN_JSON)
        , "utf8")))
    } catch (e) {
      console.log(e.stack)
      return null
    }
  }
, error: function(string) {
    console.log(clc.red(string))
  }
, success: function(string) {
    console.log(clc.green(string))
  }
}
