import { combineReducers } from '@reduxjs/toolkit';
import { contactFilterReducer } from './contactFilterSlice';
import { mockApi } from './mockApi';

export const rootReducer = combineReducers({
  filter: contactFilterReducer,
  [mockApi.reducerPath]: mockApi.reducer,
});
