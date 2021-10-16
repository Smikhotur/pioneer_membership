import { combineReducers } from 'redux';

import pioneerReducer from './pioneerReduser';

const rootReducer = combineReducers({
  // public
  pioneerReducer,
});

type RootReducerType = typeof rootReducer;
/*global ReturnType*/
export type AppStateType = ReturnType<RootReducerType>;

export default rootReducer;
