import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { contactFilterReducer } from './contactFilterSlice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: contactFilterReducer,
});
