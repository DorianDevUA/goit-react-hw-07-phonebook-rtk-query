import { createSlice } from '@reduxjs/toolkit';

const contactFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeContactFilter: (state, { payload }) => (state = payload.value),
  },
});

export const { changeContactFilter } = contactFilterSlice.actions;

export const contactFilterReducer = contactFilterSlice.reducer;
