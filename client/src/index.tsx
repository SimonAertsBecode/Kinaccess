import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//**Import files */
import './sass/app.scss';
import rootReducer from './store/reducers';
import myHistory from './utils/history';

//**Imports for redux */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//**imports for Routing */
import CustomRouter from './routes/CustomRouter';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
);
