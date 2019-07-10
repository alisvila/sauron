import { applyMiddleware,createStore } from 'redux';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

import reducer from './reducers';

const middleware = applyMiddleware(thunk, logger())

export default createStore(reducer, middleware)