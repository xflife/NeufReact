import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ConfigureStore from '../redux/utils/configureStore';
import App from './components/App.jsx';

if (__CLIENT__) {
  const store = ConfigureStore(undefined, window.__INITIALSTATE__);
  const reactClass = (<Provider store={store}><App/></Provider>);
  const rootElement = document.getElementById('app');
  ReactDOM.render(reactClass, rootElement);
}

if (__SERVER__) {
  module.exports = App;
}
