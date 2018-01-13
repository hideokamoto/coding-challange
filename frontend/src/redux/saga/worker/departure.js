/* @flow */
import { api, get } from './utils'

export function getDepartureTime (
  lineName: string,
  station: string,
  lineType: string
) {
  const path = `${api}departure/${lineName}/${station}/${lineType}`
  return get(path)
}
