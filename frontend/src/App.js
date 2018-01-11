import React, { Component } from 'react'
import moment from 'moment'
// Redux
import { Provider } from 'react-redux'

// semantic ui
import {
  Segment,
  Statistic,
  Header,
  Divider,
  Container,
  Grid
} from 'semantic-ui-react'
import './App.css'

// component
import AppLayouts from './components/layouts/index'
import SimpleMap from './components/maps/stationmap'

// Store
import { configureStore } from './redux/stores/index'
const initialState = {}
const store = configureStore(initialState)

class App extends Component {
  constructor (props) {
    super(props)
    this.handleGetLatLong = this.handleGetLatLong.bind(this)
    this.state = {
      lat: 59.95,
      long: 30.33,
      timestamp: 0
    }
  }
  handleGetLatLong () {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { coords, timestamp } = position
        this.setState({
          lat: coords.latitude,
          long: coords.longitude,
          timestamp
        })
      },
      function (err) {
        console.log(err)
      }
    )
  }
  render () {
    const upline = moment().format('HH:mm')
    const downline = moment().format('HH:mm')
    return (
      <Provider store={store}>
        <AppLayouts>
          <Container>
            <Grid columns={2} celled="internally">
              <Grid.Row>
                <Grid.Column>
                  <Header as="h2">近くの烏丸線の駅を探す</Header>
                  <button onClick={this.handleGetLatLong}>
                    位置情報から探す
                  </button>
                  <Divider />
                  <Header as="h2">発車予定時刻</Header>
                  <Segment inverted>
                    <Statistic.Group inverted>
                      <Statistic>
                        <Statistic.Label>北大路・国際会館方面</Statistic.Label>
                        <Statistic.Value>{upline}</Statistic.Value>
                      </Statistic>
                      <Statistic>
                        <Statistic.Label>京都・竹田方面</Statistic.Label>
                        <Statistic.Value>{downline}</Statistic.Value>
                      </Statistic>
                    </Statistic.Group>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <div style={{ height: '500px' }}>
                    <SimpleMap
                      center={{ lat: this.state.lat, lng: this.state.long }}
                      timestamp={this.state.timestamp}
                    />
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </AppLayouts>
      </Provider>
    )
  }
}

export default App
