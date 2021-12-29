/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import hotelReducer from './hotelSlice';

const store = configureStore({
  reducer: {hotel: hotelReducer},
});

export default store;
