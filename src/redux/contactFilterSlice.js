import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const contactFilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeContactFilter: (state, { payload }) => (state = payload.value),
  },
});

export const { changeContactFilter } = contactFilterSlice.actions;

//Selectors
export const getContactFilter = state => state.filter;

export const contactFilterReducer = contactFilterSlice.reducer;
