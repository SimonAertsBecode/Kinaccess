import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/app.scss';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhancer = compose(
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
   applyMiddleware(thunk)
);

const store = createStore(rootReducer, undefined, composeEnhancer);

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
);
