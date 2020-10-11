import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer/reducer';

import 'normalize.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.css';
import App from './components/app/app';

const middleware = applyMiddleware(thunk);

const store = createStore(
	reducer,
    composeWithDevTools(middleware)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));