import React from 'react'
// component
import Header from './header'
import Footer from './footer'

const AppLayouts = props => {
  return (
    <div className="App">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default AppLayouts