export function getGeoLocation () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { coords, timestamp } = position
        resolve({
          lat: coords.latitude,
          long: coords.longitude,
          timestamp
        })
      },
      function (err) {
        reject(err)
      }
    )
  })
}
