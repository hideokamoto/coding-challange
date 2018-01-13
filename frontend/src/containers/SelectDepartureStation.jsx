import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Semantic UI
import { Select, Button, Form } from 'semantic-ui-react'

// Action
import { getDepartureTime } from '../redux/actions/creators/departure'
import { updateSelectedStationName } from '../redux/actions/creators/stations'

// data
import stations from '../assets/stations'

class ContSelectDepartureStation extends Component {
  constructor (props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSearch () {
    const { selectedStationName } = this.props
    this.props.dispatch(getDepartureTime('karasuma-line', selectedStationName))
  }
  handleChange (e, { name, value }) {
    if (name === 'station') {
      this.props.dispatch(updateSelectedStationName(value))
    }
  }
  render () {
    const { selectedStationName } = this.props
    return (
      <Form>
        <Form.Field>
          <Select
            onChange={this.handleChange}
            name="station"
            placeholder="駅名を選択してください"
            options={stations}
            value={selectedStationName}
          />
        </Form.Field>
        <Form.Field>
          <Button
            disabled={!selectedStationName}
            content="駅名から調べる"
            onClick={this.handleSearch}
          />
        </Form.Field>
      </Form>
    )
  }
}
ContSelectDepartureStation.propTypes = {
  dispatch: PropTypes.func.isRequired
}
function mapStateToProps (state) {
  const { selectedStationName } = state.station
  return {
    selectedStationName
  }
}
export default connect(mapStateToProps)(ContSelectDepartureStation)
