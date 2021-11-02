import { combineReducers, createStore } from 'redux';
import { formReducer } from './form-reducer';

const rootReducer = combineReducers({
  form: formReducer,
});

export const store = createStore(
  rootReducer,
);

export type AppRootStateType = ReturnType<typeof rootReducer>;