import { jsonpGet } from './utils'

export function getStation (lat, long) {
  const api = `http://express.heartrails.com/api/json?method=getStations&y=${lat}&x=${long}&jsonp=getStation`
  return jsonpGet(api, 'getStation')
}
