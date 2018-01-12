import React from 'react'

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

const App = () => (
  <Provider store={store}>
    <AppLayouts>
      <Container>
        <Grid celled="internally">
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Header as="h2">直近の発車時間を調べる</Header>
              <Divider />
              <Header as="h3">駅名から探す</Header>
              <ContSelectDepartureStation />
              <Header as="h3">現在位置から探す</Header>
              <p>
                <small>
                  1km以内に最寄駅がある場合、最も近い地下鉄烏丸線の駅を表示します。
                </small>
              </p>
              <ContSearchDepartureStation />
              <Divider />
              <ContDepartureTimes />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <ContStationMap />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </AppLayouts>
  </Provider>
)

export default App
