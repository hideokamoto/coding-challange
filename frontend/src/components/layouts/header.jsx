import React from 'react'

// Semantic UI
import { Divider, Header, Container, Grid } from 'semantic-ui-react'

const AppHeader = props => {
  return (
    <div className="App-header">
      <Container>
        <Grid verticalAlign="middle" relaxed>
          <Grid.Row stretched>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Header as="h1">
                <Header.Content>京都市営地下鉄発車ナビ</Header.Content>
              </Header>
              <p>京都市営地下鉄烏丸線の発車時刻を表示します</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <Divider />
    </div>
  )
}

export default AppHeader
