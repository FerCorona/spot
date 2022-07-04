import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import pin_icon from '../assets/pin.png';

const Marker = ({ pin, onPinSelected }) => <img
  className='Pin'
  src={pin_icon}
  onClick={() => onPinSelected(pin)}/>;

class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pines, center, zoom, onPinSelected } = this.props;
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          {
            pines.map(pin => <Marker lat={pin.latitude} lng={pin.longitude} pin={pin} onPinSelected={onPinSelected} />)
          }
        </GoogleMapReact>
      </div>
    );
  }
}

Map.defaultProps = {
  pines: [ 
    { lat: 19.427197299437186, lng:  -99.16753059929398 }
   ],
  center: {
    lat: 19.427197299437186,
    lng:  -99.16753059929398
  },
  zoom: 10,
  onPinSelected: () => {}
}
export default Map;