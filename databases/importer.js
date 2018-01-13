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
// const createImportQueries =

const importToDynamoDb = param => {
  return new Promise(resolve => {
    console.log(param)
    resolve(param)
  })
}

const prepare = filePath => {
  return new Promise((resolve, reject) => {
    try {
      const json = loadJsonFile(basePath, filePath)
      const item = new ImportItem(filePath)
      const tableName = item.getTableName()
      const params = item.createImportParams(tableName, json)
      resolve(params)
    } catch (e) {
      reject(e)
    }
  })
}

// createImportParams
const importWorker = filePath => {
  return new Promise((resolve, reject) => {
    try {
      return prepare(filePath).then(params =>
        Promise.all(params.map(importToDynamoDb))
      )
    } catch (e) {
      reject(e)
    }
  })
}

importWorker('karasuma-holiday-inbound.json')
/*
convertBaseData(basePath, 'json')
  .then(fileList => Promise.all(fileList.map(importWorker)))
*/
