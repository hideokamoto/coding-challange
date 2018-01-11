const AWS = require('aws-sdk')
AWS.config.update({ region: 'ap-northeast-1' })
module.exports = {
  GET: {
    '/departure/{lineName}/{station}/{lineType}/{timestamp}': event => {
      const { lineName, station, lineType, timestamp } = event.pathParameters
      if (lineName !== 'karasuma-line') { return new Error("Invalid lineName. Only support 'karasuma-line'.") }
      const departure = new Departure(station)
      if (lineType !== 'inbound' && lineType !== 'outbound') {
        return new Error(
          `${lineType} is invalid. Only support 'inbound' or 'outbound'.`
        )
      }
      return departure.getDeparetureTime(timestamp, lineType)
    }
  }
}

class Departure {
  constructor (station) {
    this.station = station
    this.dynamodb = new AWS.DynamoDB.DocumentClient()
  }
  getDeparetureTime (timestamp, lineType) {
    const params = {
      TableName: `DepartureWeekday-${lineType}`,
      KeyConditionExpression:
        'station_name = :station_name AND departure_timestamp > :timestamp',
      ExpressionAttributeValues: {
        ':station_name': this.station,
        ':timestamp': Number(timestamp)
      },
      Limit: 3
    }
    console.log(params)
    return this.dynamodb
      .query(params)
      .promise()
      .then(data => data.Items)
  }
}
