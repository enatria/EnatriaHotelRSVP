/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  destinationId: null,
  hotelId: null,
  checkIn: null,
  checkOut: null,
  guest: null,
};

const requiredForFetchSlice = createSlice({
  name: 'requiredForFetch',
  initialState,
  reducers: {
    getAllState: (state, action) => action.payload,
    getDestinationId: (state, action) => {
      return {destinationId: action.payload};
    },
    getHotelId: (state, action) => {
      return {hotelId: action.payload};
    },
    getCheckIn: (state, action) => {
      return {checkIn: action.payload};
    },
    getCheckOut: (state, action) => {
      return {checkOut: action.payload};
    },
    getGuest: (state, action) => {
      return {guest: action.payload};
    },
  },
});

export const {getAllState, getDestinationId, getHotelId, getCheckIn, getCheckOut, getGuest} = requiredForFetchSlice.actions;
export default requiredForFetchSlice.reducer;
