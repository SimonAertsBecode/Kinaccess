//*Testing library related imports
import { render } from '@testing-library/react';

//*Redux related imports
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../../../store/reducers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

const RenderWithReduxMock = (component: JSX.Element) => render(<Provider store={store}>{component}</Provider>);

export default RenderWithReduxMock;
