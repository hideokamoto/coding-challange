import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Action
import { getDepartureTime } from '../redux/actions/creators/departure'

class ContSelectDepartureStation extends Component {
  constructor (props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
  }
  handleSearch () {
    this.props.dispatch(getDepartureTime('karasuma-line', 'kokusaikaikan', 500))
  }
  render () {
    return (
      <div>
        <button onClick={this.handleSearch}>search</button>
      </div>
    )
  }
}
ContSelectDepartureStation.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(ContSelectDepartureStation)
