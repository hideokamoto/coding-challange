const ImportItem = require('./class/ImportItem')
// const { convertBaseData } = require('./utils')
const basePath = './json'

/*
const importJsonToDynamoDB = (json) => {
  return new Promise((resolve, reject) => {
    try {
      const json = loadJsonFile(basePath, filePath)
      console.log(json)
      resolve(filePath)
    } catch (e) {
      reject(e)
    }
  })
}
*/

const loadJsonFile = (basePath, filePath) => require(`${basePath}/${filePath}`)

const importWorker = filePath => {
  return new Promise((resolve, reject) => {
    try {
      const json = loadJsonFile(basePath, filePath)
      const item = new ImportItem(filePath)
      const tableName = item.getTableName()
      const params = item.createImportParams(tableName, json)
      return Promise.all(params.map(item.importToDynamoDb.bind(item)))
        .then(data => resolve(data))
        .catch(err => reject(err))
    } catch (e) {
      reject(e)
    }
  })
}
/**/
importWorker('karasuma-weekday-inbound.json').then(result =>
  console.log(result)
)
/*
convertBaseData(basePath, 'json')
  .then(fileList => Promise.all(fileList.map(importWorker)))
/**/
