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
}

module.exports = ImportItem
