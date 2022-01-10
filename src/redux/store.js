/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import destinationsSlice from './destinationsSlice';
import hotelReducer from './hotelSlice';
import requiredForFetchSlice from './requiredForFetchSlice';

const store = configureStore({
  reducer: {
    hotel: hotelReducer,
    requiredForFetch: requiredForFetchSlice,
    destinations: destinationsSlice,
  },
});

export default store;
