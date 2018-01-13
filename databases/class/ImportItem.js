const TableName = require('./tableName')
const _ = require('lodash')
const AWS = require('aws-sdk')
const { sleep } = require('../utils')
class ImportItem {
  constructor (filePath) {
    this.filePath = filePath
    const tableName = new TableName()
    this.tableName = tableName.getTableName(filePath)
    this.params = []
    this.dynamoDB = new AWS.DynamoDB()
  }
  getTableName () {
    return this.tableName
  }
  createImportParamItem (data) {
    let distination = ''
    Object.keys(data).map(key => {
      if (!data[key]) return
      if (key === 'distination') {
        distination = data[key]
      }
    })
    if (!distination) return

    const items = Object.keys(data).map(key => {
      const trainData = {
        distination: {
          S: distination
        }
      }
      if (key !== 'distination' && key !== 'from') {
        trainData['station_name'] = {
          S: key
        }
        if (!data[key]) return false
        const timeObj = data[key].split(':')
        const time = `${timeObj[0]}${timeObj[1]}`
        trainData['departure_timestamp'] = {
          N: time
        }
        return {
          PutRequest: {
            Item: trainData
          }
        }
      } else {
        return false
      }
    })
    return _.compact(items)
  }
  createImportParams (tableName, json) {
    const lists = json.map(data => this.createImportParamItem(data))
    const items = []
    lists.map(list => {
      list.map(data => {
        items.push(data)
      })
    })
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
  createImportQuery (param) {
    const query = {
      RequestItems: {
        [this.tableName]: param
      }
    }
    return query
  }
  importToDynamoDb (param) {
    const query = this.createImportQuery(param)
    return sleep(1000).then(() => this.dynamoDB.batchWriteItem(query).promise())
  }
}

module.exports = ImportItem
