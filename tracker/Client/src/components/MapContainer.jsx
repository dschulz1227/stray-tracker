import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '300px',
  height: '300px'
};


export class MapContainer extends Component {

    constructor(props) {
        super(props);
        console.log(this.props)
    }
  render() {

    return (
      <div>
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 30.369770,
            lng: -89.091537
          }
        }
      />
      </div>
    );
  }
}


export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_KEY
  })(MapContainer);