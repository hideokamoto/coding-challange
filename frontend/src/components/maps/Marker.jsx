import React from 'react'
import PropTypes from 'prop-types'
import './Marker.css'

const StationMarker = props => <div className="marker">{props.text}</div>
StationMarker.propTypes = {
  text: PropTypes.string.isRequired
}
export default StationMarker
