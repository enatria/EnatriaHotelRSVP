/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import hotelReducer from './hotelSlice';
import requiredForFetchSlice from './requiredForFetchSlice';

const store = configureStore({
  reducer: {
    hotel: hotelReducer,
    requiredForFetch: requiredForFetchSlice,
  },
});

export default store;
