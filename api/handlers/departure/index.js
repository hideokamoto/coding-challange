const moment = require('moment')
const Departure = require('../../libs/departure')
const { getDateByTimezone } = require('../../utils')
module.exports = {
  GET: {
    '/departure/{lineName}/{station}/{lineType}': event => {
      const { lineName, station, lineType } = event.pathParameters
      if (lineName !== 'karasuma-line') {
        return new Error("Invalid lineName. Only support 'karasuma-line'.")
      }
      // const departure = new Departure(station)
      if (lineType !== 'inbound' && lineType !== 'outbound') {
        return new Error(
          `${lineType} is invalid. Only support 'inbound' or 'outbound'.`
        )
      }
      const date = getDateByTimezone()
      const departure = new Departure(station, date)
      const timestamp = moment(date).format('HHmm')
      return departure.getDeparetureTime(timestamp, lineType)
    }
  }
}
