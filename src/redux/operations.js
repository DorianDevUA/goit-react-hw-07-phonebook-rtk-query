import axios from 'axios';
import {
  fetchingError,
  fetchingInProgress,
  fetchingSuccess,
} from './contactsSlice';

axios.defaults.baseURL = 'https://669013f3c0a7969efd9ae577.mockapi.io/api/v1';

export const fetchAllContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get('/contacts');
    dispatch(fetchingSuccess(response.data));
  } catch (error) {
    dispatch(fetchingError(error));
  }
};

// export const fetchAllComtacts = async () => {
//   return response = await axios.get('/contacts');
//   return response.data;
// }
