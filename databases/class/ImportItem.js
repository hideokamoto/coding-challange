const TableName = require('./tableName')
class ImportItem {
  constructor (filePath) {
    this.filePath = filePath
    const tableName = new TableName()
    this.tableName = tableName.getTableName(filePath)
  }
  getTableName () {
    return this.tableName
  }
  createImportParamItem (data) {
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
  createImportParams (tableName, json) {
    const items = json.map(data => this.createImportParamItem(data))
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
}

module.exports = ImportItem
