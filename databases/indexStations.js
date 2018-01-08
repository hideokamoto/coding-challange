'use strict'
const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')

const resources = yaml.safeLoad(fs.readFileSync(path.join(__dirname, './base/stations.yaml'), 'utf8'))

console.log(resources)
