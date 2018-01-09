import React from 'react'

// Semantic UI
import { Divider, Header, Container, Grid } from 'semantic-ui-react'


const AppHeader = props => {
  return (
    <div className="App-header">
      <Container>
        <Grid verticalAlign="middle" relaxed columns={2}>
          <Grid.Row stretched>
            <Grid.Column>
              <Header as="h1">
                <Header.Content>
                  京都市営地下鉄発車ナビ
                </Header.Content>
                <Header.Subheader>
                  京都市営地下鉄烏丸線の発車時刻を表示します
                </Header.Subheader>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <Divider />
    </div>
  )
}

export default AppHeader
