import React from 'react';
import ReactDOM from 'react-dom';
import './components/global/css/index.css';

import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom'
import AppRouter from './Router';

//aca inyecta en el root del index.html el App.js
ReactDOM.render(<BrowserRouter>
    <AppRouter/>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
