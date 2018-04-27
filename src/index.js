import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import bookReducer from './reducers/bookReducer';
import userReducer from './reducers/userReducer';
import { createStore ,applyMiddleware ,combineReducers } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    bookReducer,
    userReducer
});

const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

store.subscribe(() => {
    console.log("================监听store变化："+JSON.stringify(store));
});

registerServiceWorker();
