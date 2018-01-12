import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// components
import SimpleMap from '../components/maps/stationmap'
import StationMapRow from '../components/maps/StationMapRow'

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
    const { lat, long, timestamp, isFetching, hasFetched } = this.props
    return (
      <div style={{ height: '500px' }}>
        <StationMapRow isFetching={isFetching} hasFetched={hasFetched}>
          <SimpleMap center={{ lat: lat, lng: long }} timestamp={timestamp} />
        </StationMapRow>
      </div>
    )
  }
}
ContStationMap.propTypes = {
  dispatch: PropTypes.func.isRequired,
  lat: PropTypes.number.isRequired,
  long: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
  hasFetched: PropTypes.bool.isRequired,
  timestamp: PropTypes.number
}
ContStationMap.defaultProps = {
  timestamp: 0
}
function mapStateToProps (state) {
  const { station } = state
  const { fetchStatus, latitude, longitude } = station
  const { isFetching, hasFetched } = fetchStatus
  const timestamp = latitude.timestamp
    ? latitude.timestamp
    : longitude.timestamp || 0
  return {
    isFetching,
    hasFetched,
    lat: latitude.value,
    long: longitude.value,
    timestamp
  }
}
export default connect(mapStateToProps)(ContStationMap)
