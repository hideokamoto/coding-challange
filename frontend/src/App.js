import React, { Component } from 'react'

// Redux
import { Provider } from 'react-redux'

// semantic ui
import { Header, Divider, Container, Grid } from 'semantic-ui-react'
import './App.css'

// container
import ContSelectDepartureStation from './containers/SelectDepartureStation'
import ContDepartureTimes from './containers/ShowDepartureTime'

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
                  <ContSelectDepartureStation />
                  <Divider />
                  <ContDepartureTimes />
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
