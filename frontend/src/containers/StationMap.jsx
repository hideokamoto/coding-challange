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

// Utils
import { getUsersGeoLocation, getStationData } from '../utils/mapStateToProps'

class ContStationMap extends Component {
  componentWillUnmount () {
    const { dispatch } = this.props
    dispatch(unsetLatLong())
    dispatch(updateFetchStatus())
  }
  render () {
    const {
      lat,
      long,
      timestamp,
      isFetching,
      hasFetched,
      stationLat,
      stationLong,
      stationName
    } = this.props
    return (
      <div style={{ height: '500px' }}>
        <StationMapRow isFetching={isFetching} hasFetched={hasFetched}>
          <SimpleMap
            center={{ lat, lng: long }}
            station={{ lat: stationLat, lng: stationLong, name: stationName }}
            timestamp={timestamp}
          />
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
  stationDistance: PropTypes.string.isRequired,
  stationLat: PropTypes.number.isRequired,
  stationLong: PropTypes.number.isRequired,
  stationName: PropTypes.string.isRequired,
  timestamp: PropTypes.number
}
ContStationMap.defaultProps = {
  timestamp: 0
}

function mapStateToProps (state) {
  const stationState = state.station
  const { fetchStatus } = stationState
  const { isFetching, hasFetched } = fetchStatus
  const geo = getUsersGeoLocation(stationState)
  const station = getStationData(stationState)
  return {
    ...geo,
    ...station,
    isFetching,
    hasFetched
  }
}
export default connect(mapStateToProps)(ContStationMap)
