class TableName {
  dispatchWeekDay (dateType) {
    switch (dateType) {
      case 'holiday':
        return 'Holiday'
      case 'weekday':
        return 'Weekday'
      default:
        return new Error('invalid date type')
    }
  }
  dispatchLinType (lineType) {
    switch (lineType) {
      case 'inbound':
      case 'outbound':
        return lineType
      default:
        return new Error('invalid line type')
    }
  }
  getTableName (filePath) {
    try {
      const file = filePath.split('.')
      const dbDataObj = file[0].split('-')
      const lineName = dbDataObj[0]
      if (lineName !== 'karasuma') return new Error('unsupported line')
      const dateType = this.dispatchWeekDay(dbDataObj[1])
      if (dateType instanceof Error) return dateType
      const lineType = this.dispatchLinType(dbDataObj[2])
      if (lineType instanceof Error) return lineType
      const dbName = `Departure${dateType}-${lineType}`
      return dbName
    } catch (e) {
      return e
    }
  }
}
module.exports = TableName
