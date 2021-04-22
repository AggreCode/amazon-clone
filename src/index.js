import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import StateProvider from './StateProvider.js'
import reducer, {initialState} from './Reducer.js'
ReactDOM.render(
<StateProvider initialState={initialState} reducer={reducer}>
<App />
</StateProvider>

, document.getElementById('root'));
registerServiceWorker();
