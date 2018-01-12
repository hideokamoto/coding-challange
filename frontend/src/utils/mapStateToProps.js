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
  const { distance, lat, long, name } = stationData
  return {
    stationDistance: distance,
    stationLat: lat,
    stationLong: long,
    stationName: name
  }
}
