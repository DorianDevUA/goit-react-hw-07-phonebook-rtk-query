import { createSlice } from '@reduxjs/toolkit';
import STATUS from 'services/state-machine';
import { fetchAllContactsThunk } from './operationsThunk';

const initialState = {
  contacts: [],
  status: STATUS.IDLE,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    deleteContact: (state, { payload }) => {
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload.id),
      };
    },
  },
  // Додаємо обробку зовнішніх екшенів
  extraReducers: builder => {
    builder
      .addCase(fetchAllContactsThunk.pending, state => {
        return {
          ...state,
          status: STATUS.PENDING,
        };
      })
      .addCase(fetchAllContactsThunk.fulfilled, (state, { payload }) => {
        return {
          ...state,
          contacts: payload,
          error: null,
          status: STATUS.FULFILLD,
        };
      })
      .addCase(fetchAllContactsThunk.rejected, (state, { payload }) => {
        return {
          ...state,
          error: payload,
          status: STATUS.REJECTED,
        };
      });
  },
});

export const { deleteContact } = contactsSlice.actions;

// Selectors
export const getContactBook = state => state.contactBook;
export const getContacts = state => state.contactBook.contacts;
export const getContactsStatus = state => state.contactBook.status;
export const getContactsError = state => state.contactBook.error;

export const contactsReducer = contactsSlice.reducer;
