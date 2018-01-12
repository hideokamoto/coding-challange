import React, { Component } from 'react'

// Redux
import { Provider } from 'react-redux'

// semantic ui
import { Header, Divider, Container, Grid } from 'semantic-ui-react'
import './App.css'

// container
import ContSelectDepartureStation from './containers/SelectDepartureStation'
import ContSearchDepartureStation from './containers/SearchDepartureStation'
import ContDepartureTimes from './containers/ShowDepartureTime'
import ContStationMap from './containers/StationMap'

// component
import AppLayouts from './components/layouts/index'

// Store
import { configureStore } from './redux/stores/index'

const initialState = {}
const store = configureStore(initialState)

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lat: 59.95,
      long: 30.33,
      timestamp: 0
    }
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
                  <ContSearchDepartureStation />
                  <Divider />
                  <Header as="h2">駅名から探す</Header>
                  <ContSelectDepartureStation />
                  <Divider />
                  <ContDepartureTimes />
                </Grid.Column>
                <Grid.Column>
                  <ContStationMap />
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
