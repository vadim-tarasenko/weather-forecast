import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducers } from '../../root.reducers';

const store = createStore(rootReducers, composeWithDevTools());

export { store };
