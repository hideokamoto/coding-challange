import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

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

export default SimpleMap