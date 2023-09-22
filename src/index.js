import React from 'react';
import ReactDOM from 'react-dom/client';
// import {NewApp} from './moreComponents/NewApp';
// import App from '../src/App';
// import { AppS } from './AppS';
import {BrowserRouter} from 'react-router-dom'
import {App} from './react-router-dom/app'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    
);

