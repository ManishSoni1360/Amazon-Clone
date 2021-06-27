import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, {initialState} from './MyComponents/reducer';
import {StateProvider} from './MyComponents/StateProvider';

ReactDOM.render(
  <React.StrictMode>
    
    <StateProvider initialState = {initialState} reducer={reducer}>
    <App />
    </StateProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

