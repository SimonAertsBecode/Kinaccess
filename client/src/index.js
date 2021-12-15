import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//**Import files */
import './sass/app.scss';
import rootReducer from './store/reducers';
import myHistory from './utils/history';

import { createBrowserHistory } from 'history';

//**Imports for redux */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//**imports for Routing */
import { Router } from 'react-router';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

ReactDOM.render(
   <Provider store={store}>
      <Router location={myHistory.location} history={myHistory}>
         <App />
      </Router>
   </Provider>,
   document.getElementById('root')
);
