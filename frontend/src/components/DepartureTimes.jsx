import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import './DepartureTimes.css'

// Semantic UI
import { Segment, Statistic, Loader } from 'semantic-ui-react'

function parseDepartureTime (time) {
  if (time.length < 3) return new Error('不正なフォーマット')
  return {
    hour: time.slice(0, -2),
    minutes: time.slice(-2)
  }
}

function getDepartureTime (data) {
  if (!data) return '終了しました'
  const timeObj = parseDepartureTime(String(data.departure_timestamp))
  if (timeObj instanceof Error) { return '取得に失敗しました。もう一度お試しください。' }
  return moment(`${timeObj.hour}-${timeObj.minutes}`, 'HH-mm').format('HH:mm')
}

const DepartureTimes = props => {
  const time = moment().format('HH:mm')
  const { hasFetched, isFetching } = props
  if (isFetching) return <Loader active />
  if (!hasFetched) return <p>駅を選択してください。</p>
  const { inboundTimes, outboundTimes } = props
  const inbound = getDepartureTime(inboundTimes[0])
  const outbound = getDepartureTime(outboundTimes[0])
  return (
    <Fragment>
      <p>{time}時点</p>
      <Segment inverted>
        <Statistic.Group inverted className="departureTimeRow">
          <Statistic>
            <Statistic.Label>北大路・国際会館方面</Statistic.Label>
            <Statistic.Value>{inbound}</Statistic.Value>
          </Statistic>
          <Statistic>
            <Statistic.Label>京都・竹田方面</Statistic.Label>
            <Statistic.Value>{outbound}</Statistic.Value>
          </Statistic>
        </Statistic.Group>
      </Segment>
    </Fragment>
  )
}
DepartureTimes.propTypes = {
  hasFetched: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  inboundTimes: PropTypes.array.isRequired,
  outboundTimes: PropTypes.array.isRequired,
  inbound: PropTypes.string,
  outbound: PropTypes.string
}
DepartureTimes.defaultProps = {
  inbound: '終了しました',
  outbound: '終了しました'
}

export default DepartureTimes
