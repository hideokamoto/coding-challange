const assert = require('power-assert')
const Departure = require('../../libs/Departure')
describe('Class: Departure', () => {
  let departure
  beforeEach(() => {
    departure = new Departure('example', new Date(2018, 0, 13))
  })
  describe('#constructor', () => {
    it('should set valid params', () => {
      assert.equal(departure.station, 'example')
      assert.equal(departure.tableName, 'Holiday')
    })
  })
  describe('#getTableName', () => {
    it('should return Holiday when param is holiday', () => {
      const tableName = departure.getTableName(new Date(2018, 0, 13))
      assert.equal(tableName, 'Holiday')
    })
    it('should return Weekday when param is weekday', () => {
      const tableName = departure.getTableName(new Date(2018, 0, 12))
      assert.equal(tableName, 'Weekday')
    })
  })
  describe('#createDepartureTimeQuery', () => {
    it('should return valid get query', () => {
      const query = departure.createDepartureTimeQuery(1024, 'inbound')
      assert.deepEqual(query, {
        TableName: `DepartureHoliday-inbound`,
        KeyConditionExpression:
          'station_name = :station_name AND departure_timestamp > :timestamp',
        ExpressionAttributeValues: {
          ':station_name': 'example',
          ':timestamp': 1024
        },
        Limit: 3
      })
    })
  })
})
