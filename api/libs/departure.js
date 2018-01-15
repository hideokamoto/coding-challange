const AWS = require('aws-sdk')
AWS.config.update({ region: 'ap-northeast-1' })
class Departure {
  constructor (station, date = new Date()) {
    this.station = station
    this.dynamodb = new AWS.DynamoDB.DocumentClient()
    this.tableName = this.getTableName(date)
  }
  getTableName (date = new Date()) {
    const { getHoliday } = require('./holidays')
    if (!getHoliday(date)) {
      return 'Weekday'
    } else {
      return 'Holiday'
    }
  }
  createDepartureTimeQuery (timestamp, lineType) {
    const query = {
      TableName: `Departure${this.tableName}-${lineType}`,
      KeyConditionExpression:
        'station_name = :station_name AND departure_timestamp > :timestamp',
      ExpressionAttributeValues: {
        ':station_name': this.station,
        ':timestamp': Number(timestamp)
      },
      Limit: 3
    }
    return query
  }
  getDeparetureTime (timestamp, lineType) {
    const params = this.createDepartureTimeQuery(timestamp, lineType)
    console.log(params)
    return this.dynamodb
      .query(params)
      .promise()
      .then(data => data.Items)
  }
}
module.exports = Departure
