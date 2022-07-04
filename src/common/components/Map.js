import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const pin_icon = require('../assets/pin.png');

class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pines, center, zoom } = this.props;
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={center}
          defaultZoom={zoom}
        >
          {
            pines.map(pin => <img
              src={pin_icon}
              lat={59.955413}
              lng={30.337844}
              onClick={() => alert('holis')}/>)
          }
        </GoogleMapReact>
      </div>
    );
  }
}

Map.defaultProps = {
  pines: [ '' ],
  center: {
    lat: 59.95,
    lng: 30.33
  },
  zoom: 20
}
export default Map;