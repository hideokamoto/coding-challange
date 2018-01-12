import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const StationMarker = props => {
  if (!props.name) return null
  const station = [props.lat, props.lng]
  return (
    <Marker position={station}>
      <Popup>
        <span>{props.name}</span>
      </Popup>
    </Marker>
  )
}
const SimpleMap = props => {
  const center = [props.center.lat, props.center.lng]
  return (
    <Map center={center} zoom={13}>
      <TileLayer
        url="http://tile.openstreetmap.jp/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Marker position={center}>
        <Popup>
          <span>現在位置</span>
        </Popup>
      </Marker>
      <StationMarker
        lat={props.station.lat}
        lng={props.station.lng}
        name={props.station.name}
      />
    </Map>
  )
}

export default SimpleMap
