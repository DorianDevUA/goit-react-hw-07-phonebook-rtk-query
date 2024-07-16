import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchAllContacts } from 'services/mockapi';

export const THUNK_STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

export const getThunksWithStatus = status => {
  return arrThunk.map(thunk => thunk[status]);
};

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  fetchAllContacts,
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  addContact,
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  deleteContact,
);

export const arrThunk = [
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
];
