import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';
import { mockApi } from './mockApi';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(mockApi.middleware),
});
