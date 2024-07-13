import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://669013f3c0a7969efd9ae577.mockapi.io/api/v1';

export const fetchAllContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    const response = await axios.get('/contacts');
    return response.data;
  },
);
