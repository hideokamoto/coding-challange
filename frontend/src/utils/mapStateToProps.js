export function getUsersGeoLocation (station) {
  const { latitude, longitude } = station
  const timestamp = latitude.timestamp
    ? latitude.timestamp
    : longitude.timestamp || 0
  return {
    lat: latitude.value,
    long: longitude.value,
    timestamp
  }
}
export function getStationData (station) {
  const { stationData } = station
  const { distance, x, y, name } = stationData
  return {
    stationDistance: distance,
    stationX: x,
    stationY: y,
    stationName: name
  }
}
