import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Semantic UI
import { Header } from 'semantic-ui-react'

// components
import DepartureTimes from '../components/DepartureTimes'

// Action
import {
  unsetInboundDepartureTime,
  unsetOutboundDepartureTime
} from '../redux/actions/creators/departure'

class ContDepartureTimes extends Component {
  componentWillUnmount () {
    const { dispatch } = this.props
    dispatch(unsetInboundDepartureTime())
    dispatch(unsetOutboundDepartureTime())
  }
  render () {
    const { hasFetched, isFetching, inboundTimes, outboundTimes } = this.props
    return (
      <Fragment>
        <Header as="h2">発車予定時刻</Header>
        <DepartureTimes
          hasFetched={hasFetched}
          isFetching={isFetching}
          inboundTimes={inboundTimes}
          outboundTimes={outboundTimes}
        />
      </Fragment>
    )
  }
}
ContDepartureTimes.propTypes = {
  hasFetched: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  inboundTimes: PropTypes.array.isRequired,
  outboundTimes: PropTypes.array.isRequired
}
function mapStateToProps (state) {
  const { departure } = state
  const { inbound, outbound } = departure
  const isFetching = (() => {
    if (inbound.isFetching || outbound.isFetching) return true
    return false
  })()
  const hasFetched = (() => {
    if (inbound.hasFetched && outbound.hasFetched) return true
    return false
  })()
  return {
    hasFetched,
    isFetching,
    inboundTimes: inbound.times,
    outboundTimes: outbound.times
  }
}
export default connect(mapStateToProps)(ContDepartureTimes)
