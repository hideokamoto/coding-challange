const fs = require('fs')
module.exports.convertBaseData = (basePath = './base', fileType = 'csv') => {
  return new Promise((resolve, reject) => {
    fs.readdir(basePath, (err, files) => {
      if (err) return reject(err)
      const fileList = files.filter(file => {
        switch (fileType) {
          case 'csv':
            return filterCsvFile(basePath, file)
          case 'json':
            return filterJsonFile(basePath, file)
          default:
            return reject(new Error('invalid file type'))
        }
      })
      resolve(fileList)
    })
  })
}

const filterJsonFile = (basePath, file) => {
  return fs.statSync(`${basePath}/${file}`).isFile() && /.*\.json$/.test(file)
}

const filterCsvFile = (basePath, file) => {
  return fs.statSync(`${basePath}/${file}`).isFile() && /.*\.csv$/.test(file)
}
