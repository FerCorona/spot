import React, { useState, useEffect } from 'react';
import Map from './Map';
import { Select, Button, Col, Row, Typography, Modal } from 'antd';

const { Option } = Select;
const { Title } = Typography;

import { SearchOutlined, BankOutlined, NumberOutlined, ShrinkOutlined } from '@ant-design/icons';

import { getSpots } from '../helpers/api-helpers';
import { TYPE, TERM } from '../helpers/constants';

const MapaView = () => {
  const [ filters, setFilters ] = useState({
    type: [],
    term: []
  });
  const [ spots, setSpots ] = useState([]);
  const [ sopotSelected, setSpotSelected ] = useState(null);
  useEffect(() => {
    getSpots()
    .then(data => {
      let spots = data.data.data.spots;
      spots = spots.filter(spot => filters.type.length === 0 || filters.type.includes(String(spot.spot_type_id)));
      console.log(spots);
      spots = spots.filter(spot => filters.term.length === 0 || filters.term.includes(String(spot.term)));
      setSpots(spots);
    });
  }, [ filters ]);
  return (
    <div className='MapaView'>
      <Modal title={!sopotSelected ? '' : sopotSelected.name} visible={sopotSelected} onOk={() => setSpotSelected(null)} onCancel={() => setSpotSelected(null)}>
        <Row gutter={[8, 8]}>
          <Col xs={12} lg={12} align='middle' justify='center'>
          <BankOutlined />
          <Typography.Title
            level={5}
            style={{
              margin: 0,
            }}
          >
            {!sopotSelected ? '-' : sopotSelected.street}
          </Typography.Title>
          </Col>
          <Col xs={12} lg={12} align='middle' justify='center'>
            <ShrinkOutlined />
            <Typography.Title
              level={5}
              style={{
                margin: 0,
              }}
            >
              {!sopotSelected ? '-' : sopotSelected.reference}
            </Typography.Title>
          </Col>
        </Row>
        <Row gutter={[8, 8]}>
          <Col xs={12} lg={12} align='middle' justify='center'>
          <NumberOutlined />
          <Typography.Title
            level={5}
            style={{
              margin: 0,
            }}
          >
            {!sopotSelected ? '-' : sopotSelected.ext_number}
          </Typography.Title>
          </Col>
          <Col xs={12} lg={12} align='middle' justify='center'>
            <NumberOutlined />
            <Typography.Title
              level={5}
              style={{
                margin: 0,
              }}
            >
              {!sopotSelected ? '-' : sopotSelected.ext_number}
            </Typography.Title>
          </Col>
        </Row>
      </Modal>
      <div className='Header'>
        <div className='FilterContainer'>
          <Title level={2}>Busqueda de spots</Title>
          <Row gutter={[8, 8]} justify='end'>
          <Col xs={24} lg={24} >
            <Select
              mode='multiple'
              allowClear
              style={{
                width: '100%',
              }}
              placeholder="Selecciona un tipo de propiedad"
              onChange={types => setFilters({ ...filters, type: types})}
            >
              {Object.keys(TYPE).map(type => <Option key={type}>{TYPE[type]}</Option>)}
            </Select>
          </Col>
          <Col xs={24} lg={24} >
            <Select
              mode='multiple'
              allowClear
              style={{
                width: '100%',
              }}
              placeholder="Selecciona un termino"
              onChange={term => setFilters({ ...filters, term: term})}
            >
              {Object.keys(TERM).map(term => <Option key={term}>{TERM[term]}</Option>)}
            </Select>
          </Col>
          <Col xs={24} lg={24} >
            <Button type='primary' icon={<SearchOutlined />}>
              Buscar
            </Button>
          </Col>
        </Row>
        </div>
      </div>
      <div className='Map'>
        <Map pines={spots} onPinSelected={setSpotSelected} />
      </div>
    </div>
  );
};

export default MapaView;