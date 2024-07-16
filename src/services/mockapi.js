import axios from 'axios';

axios.defaults.baseURL = 'https://669013f3c0a7969efd9ae577.mockapi.io/api/v1';

export const fetchAllContacts = async (_, thunkAPI) => {
  try {
    const responce = await axios.get('/contacts');
    console.log('GET Responce:', responce.data);
    return responce.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
};

export const addContact = async ({ name, number }, thunkAPI) => {
  try {
    const responce = await axios.post('/contacts', { name, number });
    console.log('POST Responce:', responce.data);
    return responce.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
};

export const deleteContact = async (id, thunkAPI) => {
  try {
    const responce = await axios.delete(`/contacts/${id}`);
    console.log('DELETE Responce:', responce.data);
    return responce.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
};
