const { convertBaseData } = require('./utils')

convertBaseData('./json', 'json').then(fileList => console.log(fileList))
