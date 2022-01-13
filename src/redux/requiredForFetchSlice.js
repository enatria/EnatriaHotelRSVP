/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  search: undefined,
  query: null,
  destinationId: null,
  hotelId: null,
  checkIn: null,
  checkOut: null,
  guest: null,
  image: null,
};

const requiredForFetchSlice = createSlice({
  name: 'requiredForFetch',
  initialState,
  reducers: {
    getAllState: (state, action) => action.payload,
    setSearch: (state, action) => {
      return {
        ...state,
        search: action.payload,
      };
    },
    getQuery: (state, action) => {
      return {
        ...state,
        query: action.payload,
      };
    },
    getDestinationId: (state, action) => {
      return {
        ...state,
        destinationId: action.payload,
      };
    },
    getHotelId: (state, action) => {
      return {
        ...state,
        hotelId: action.payload,
      };
    },
    getCheckIn: (state, action) => {
      return {
        ...state,
        checkIn: action.payload,
      };
    },
    getCheckOut: (state, action) => {
      return {
        ...state,
        checkOut: action.payload,
      };
    },
    getGuest: (state, action) => {
      return {
        ...state,
        guest: action.payload,
      };
    },
    getImage: (state, action) => {
      const uri = action.payload.uri;
      return {
        ...state,
        image: {
          uri: uri.split('?')[0],
        },
      };
    },
  },
});

export const {
  getAllState,
  setSearch,
  getQuery,
  getDestinationId,
  getHotelId,
  getCheckIn,
  getCheckOut,
  getGuest,
  getImage,
} = requiredForFetchSlice.actions;
export default requiredForFetchSlice.reducer;
