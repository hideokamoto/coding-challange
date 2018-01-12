import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Semantic UI
import { Select, Button, Form } from 'semantic-ui-react'

// Action
import { getDepartureTime } from '../redux/actions/creators/departure'
import stations from '../assets/stations'

class ContSelectDepartureStation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      station: ''
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSearch () {
    const { station } = this.state
    this.props.dispatch(getDepartureTime('karasuma-line', station, 500))
  }
  handleChange (e, { name, value }) {
    this.setState({ [name]: value })
  }
  render () {
    const { station } = this.state
    return (
      <Form>
        <Form.Field>
          <Select
            onChange={this.handleChange}
            name="station"
            placeholder="駅名を選択してください"
            options={stations}
            value={station}
          />
        </Form.Field>
        <Form.Field>
          <Button
            disabled={!station}
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

export default connect()(ContSelectDepartureStation)
