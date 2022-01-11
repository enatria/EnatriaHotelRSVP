/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const hotelSlice = createSlice({
  name: 'booked',
  initialState: [],
  reducers: {
    addData: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const {addData} = hotelSlice.actions;
export default hotelSlice.reducer;
