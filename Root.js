import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index';

export default class Root extends React.Component {
  render() {
    return (
    	<Provider store={store}>
      		<App />
      	</Provider>
    );
  }
}