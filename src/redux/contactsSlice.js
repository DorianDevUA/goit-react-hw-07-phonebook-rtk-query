import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import * as contactsHandlers from './contactsHandlers';
import * as contactsThunks from './operations';
import STATUS from 'services/state-machine';

const {
  handlePending,
  handleRejected,
  handleFulfilled,
  handleFulfilledFetchAll,
  handleFulfilledAddContact,
  handleFulfilledDeleteContact,
} = contactsHandlers;

const {
  THUNK_STATUS,
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
  getThunksWithStatus,
} = contactsThunks;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    status: STATUS.IDLE,
    error: null,
  },
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = THUNK_STATUS;
    builder
      .addCase(fetchContactsThunk.fulfilled, handleFulfilledFetchAll)
      .addCase(addContactThunk.fulfilled, handleFulfilledAddContact)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDeleteContact)
      .addMatcher(isAnyOf(...getThunksWithStatus(PENDING)), handlePending)
      .addMatcher(isAnyOf(...getThunksWithStatus(FULFILLED)), handleFulfilled)
      .addMatcher(isAnyOf(...getThunksWithStatus(REJECTED)), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
