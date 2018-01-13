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
const createImportParamItem = data => {
  const items = {}
  Object.keys(data).map(key => {
    if (!data[key]) return
    items['station_name'] = {
      S: key
    }
    if (key === 'distination' || key === 'from') {
      items[key] = {
        S: data[key]
      }
    } else {
      const timeObj = data[key].split(':')
      const time = `${timeObj[0]}${timeObj[1]}`
      items['departure_times'] = {
        N: Number(time)
      }
    }
  })
  return {
    PutRequest: {
      Item: items
    }
  }
}

const createImportParams = (tableName, json) => {
  const items = json.map(data => createImportParamItem(data))
  let key = 1
  const params = []
  let subItems = []
  items.map(item => {
    if (key === 25) {
      params.push(subItems)
      subItems = []
      key = 1
    } else {
      subItems.push(item)
      key += 1
    }
  })
  params.push(subItems)
  return params
}

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
      const params = createImportParams(tableName, json)
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
