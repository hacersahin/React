import React from 'react';
import ReactDOM from 'react-dom/client';

import Baslik from './Baslik';
import Backend from './Backend';
import Frontend from './Frontend';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Baslik ad="Hacer" soyad="Şahin"/>
    <Frontend/>
    <Backend/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
