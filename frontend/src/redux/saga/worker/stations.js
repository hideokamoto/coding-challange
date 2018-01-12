import { jsonpGet } from './utils'

export function getStation (lat, long) {
  const api = `http://express.heartrails.com/api/json?method=getStations&y=${lat}&x=${long}&jsonp=getStation`
  return jsonpGet(api, 'getStation')
}

export function getTargetStation (stations, target = '京都市烏丸線') {
  return new Promise((resolve, reject) => {
    const { station } = stations
    if (!station) return reject(new Error('station not found'))
    const targetStations = station.map(
      data => (data.line === target ? data : {})
    )
    let distance = 1000 // 1km
    let nearestStation = {}
    targetStations.map(function (data) {
      if (Object.keys(data).length === 0) return false
      const distanceObj = data.distance.split('m')
      const stationDistance = Number(distanceObj[0])
      if (stationDistance > distance) return false
      distance = stationDistance
      nearestStation = data
      return true
    })
    if (Object.keys(nearestStation).length === 0) {
      return reject(new Error('station not found'))
    }
    return resolve(nearestStation)
  })
}
