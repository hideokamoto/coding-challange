/* @flow */
import { api, get } from './utils'

export function getDepartureTime (
  lineName: string,
  station: string,
  lineType: string,
  timestamp: number
) {
  const path = `${api}departure/${lineName}/${station}/${lineType}/${timestamp}`
  return get(path)
}
