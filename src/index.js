import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';


const history = createBrowserHistory();

import MapaView from './common/components/MapaView';
import Detalle from './common/components/Detalle';

import 'antd/dist/antd.css';
require('./common/stylesheets/general.scss');

ReactDOM.render((
  <Router history={history} >
    <Routes>
      <Route exact path='/' element={<MapaView />} />
      <Route path='/mapa' element={<MapaView />} />
    </Routes>
  </Router>
), document.getElementById('app'));
