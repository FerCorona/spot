import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import pin_icon from '../assets/pin.png';

const Marker = ({ id }) => <img
  className='Pin'
  src={pin_icon}
  onClick={() => window.location = `/detalle/${id}`}/>;

class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pines, center, zoom } = this.props;
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          {
            pines.map(pin => <Marker lat={pin.latitude} lng={pin.longitude} id={pin.id}/>)
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
  zoom: 10
}
export default Map;