import React from 'react'
import GoogleMap from 'google-map-react'
import StationMarker from './Marker'
const SimpleMap = props => {
  const { station, center } = props
  return (
    <GoogleMap
      apiKey="AIzaSyAoF_8qD1-c0zLMv22XKLubTNbSzYB8WXU"
      center={center}
      zoom={props.zoom || 15}
    >
      <StationMarker lat={center.lat} lng={center.lng} text="現在位置" />
      <StationMarker
        lat={station.lat}
        lng={station.lng}
        text={`${station.name}駅`}
      />
    </GoogleMap>
  )
}

export default SimpleMap
