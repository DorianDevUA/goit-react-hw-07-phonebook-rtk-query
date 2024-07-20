import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { contactFilterReducer } from './contactFilterSlice';
import { mockApi } from './mockApi';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: contactFilterReducer,
  [mockApi.reducerPath]: mockApi.reducer,
});
