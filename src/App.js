import React,{ useEffect } from 'react';
import Header from'./Header';
import Help from './Help';
import { Provider } from 'react-redux';
import store from './store';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <div className='container'>
      <Help/>
      </div>
    </div>
    </Provider>
  );
}

export default App;
