import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Semantic UI

// components
import SimpleMap from '../components/maps/stationmap'

// Action
import {
  unsetLatLong,
  updateFetchStatus
} from '../redux/actions/creators/stations'

class ContStationMap extends Component {
  componentWillUnmount () {
    const { dispatch } = this.props
    dispatch(unsetLatLong())
    dispatch(updateFetchStatus())
  }
  render () {
    const { lat, long, timestamp } = this.props
    return (
      <div style={{ height: '500px' }}>
        <SimpleMap center={{ lat: lat, lng: long }} timestamp={timestamp} />
      </div>
    )
  }
}
ContStationMap.propTypes = {
  lat: PropTypes.number.isRequired,
  long: PropTypes.number.isRequired,
  timestamp: PropTypes.number
}
ContStationMap.defaultProps = {
  timestamp: 0
}
function mapStateToProps (state) {
  return {
    lat: 0,
    long: 0,
    timestamp: 0
  }
}
export default connect(mapStateToProps)(ContStationMap)
