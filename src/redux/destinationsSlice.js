/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const destinationsSlice = createSlice({
  name: 'destinations',
  initialState: null,
  reducers: {
    addDataDestinations: (state, action) => {
      return action.payload;
    },
  },
});

export const {addDataDestinations} = destinationsSlice.actions;
export default destinationsSlice.reducer;
