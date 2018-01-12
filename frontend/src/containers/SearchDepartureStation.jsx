import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Semantic UI
import { Button, Form } from 'semantic-ui-react'

// Action
import { findStation } from '../redux/actions/creators/stations'

class ContSearchDepartureStation extends Component {
  constructor (props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
  }
  handleSearch () {
    this.props.dispatch(findStation())
  }
  render () {
    if (!('geolocation' in navigator)) {
      return <p>位置情報サービスが利用できないブラウザです。</p>
    }
    return (
      <Form>
        <Form.Field>
          <Button content="最寄駅から探す" onClick={this.handleSearch} />
        </Form.Field>
      </Form>
    )
  }
}
ContSearchDepartureStation.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(ContSearchDepartureStation)
