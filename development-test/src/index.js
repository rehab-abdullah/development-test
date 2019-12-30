import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reducers from './reducers';
import promiseMiddleware from 'redux-promise';
import 'bootstrap/dist/css/bootstrap.min.css';


const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

 const store = createStoreWithMiddleware(reducers);

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
         <App />
    </BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
