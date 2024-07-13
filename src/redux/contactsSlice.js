import { createSlice } from '@reduxjs/toolkit';
import STATUS from 'services/state-machine';

const initialState = {
  contacts: [],
  status: STATUS.IDLE,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    fetchingInProgress: state => {
      return {
        ...state,
        status: STATUS.PENDING,
      };
    },
    fetchingSuccess: (state, { payload }) => {
      return {
        ...state,
        contacts: payload,
        error: null,
        status: STATUS.FULFILLD,
      };
    },
    fetchingError: (state, { payload }) => {
      return {
        ...state,
        error: payload,
        status: STATUS.REJECTED,
      };
    },
    deleteContact: (state, { payload }) => {
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload.id),
      };
    },
  },
});

// With immer
// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     fetchingInProgress: state => {
//       state.isLoading = true;
//     },
//     fetchingSuccess: (state, { payload }) => {
//       state.contacts = payload;
//       state.isLoading = false;
//       state.error = null;
//     },
//     fetchingError: (state, { payload }) => {
//       state.error = payload;
//       state.isLoading = false;
//     },
//     deleteContact: (state, { payload }) => {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== payload.id,
//       );
//     },
//   },
// });

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  deleteContact,
} = contactsSlice.actions;

// Selectors
export const getContactBook = state => state.contactBook;
export const getContacts = state => state.contactBook.contacts;
export const getContactsStatus = state => state.contactBook.status;
export const getContactsError = state => state.contactBook.error;

export const contactsReducer = contactsSlice.reducer;
