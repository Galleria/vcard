import React from 'react';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import timeline from './reducers'

const store = createStore(timeline)

render ( 
     <Provider store={store}>
        <App />
     </Provider>
     , document.getElementById('root')
)
registerServiceWorker();
