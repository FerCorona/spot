import React, { useState, useEffect } from 'react';
import Map from './Map';
import { Select } from 'antd';

const { Option } = Select;

import { getSpots } from '../helpers/api-helpers';

const MapaView = () => {
  useEffect(() => {
    getSpots()
    .then(data => console.log(data));
  }, []);
  return (
    <div className='MapaView'>
      <div className='Header'>
      <Select
        mode="multiple"
        allowClear
        style={{
          width: '100%',
        }}
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
      >
        <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
      </Select>
      </div>
      <div className='Map'>
        <Map markers/>
      </div>
    </div>
  );
};

export default MapaView;