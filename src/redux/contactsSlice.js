import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    fetchingInProgress: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    fetchingSuccess: (state, { payload }) => {
      return {
        ...state,
        contacts: payload,
        error: null,
        isLoading: false,
      };
    },
    fetchingError: (state, { payload }) => {
      return {
        ...state,
        error: payload,
        isLoading: false,
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

export const contactsReducer = contactsSlice.reducer;
