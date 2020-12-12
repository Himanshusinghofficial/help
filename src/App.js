import React,{ useEffect } from 'react';
import './App.css';
import Header from'./Header';
import Help from './Help';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div className="App">
      <Header/>
      <div className='container'>
      <Help/>
      </div>
    </div>
  );
}

export default App;
