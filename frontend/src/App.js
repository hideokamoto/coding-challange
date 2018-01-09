import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./App.css";

// component
import AppLayouts from "./components/layouts/index";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    zoom: 11
  };

  render() {
    if (this.props.timestamp === 0) return <div />;
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={this.props.center.lat}
          lng={this.props.center.lng}
          text={"Your are here"}
        />
      </GoogleMapReact>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.handleGetLatLong = this.handleGetLatLong.bind(this);
    this.state = {
      lat: 59.95,
      long: 30.33,
      timestamp: 0
    };
  }
  handleGetLatLong() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { coords, timestamp } = position;
        this.setState({
          lat: coords.latitude,
          long: coords.longitude,
          timestamp
        });
      },
      function(err) {
        console.log(err);
      }
    );
  }
  render() {
    return (
      <AppLayouts>
        <button onClick={this.handleGetLatLong}>Get Geo</button>
        <div style={{ height: "500px" }}>
          <SimpleMap
            center={{ lat: this.state.lat, lng: this.state.long }}
            timestamp={this.state.timestamp}
          />
        </div>
      </AppLayouts>
    );
  }
}

export default App;
