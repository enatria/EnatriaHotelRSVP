/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    getDataHotel: (state, action) => {
      // set data hotel to redux persist
      return {items: action.payload};
    },
    favouriteHotelToggle: (state, action) => {
      let temp = [];
      const filteredHotel = state.items.filter((item) => item.id === action.payload.id);

      if (filteredHotel.length > 0) {
        if (state.items.length > 0) {
          state.items.map((item) => {
            if (item.id === action.payload.id) {
              let isFavourite;
              if (action.payload.isFavourite) {
                isFavourite = false;
                //  delete/pop data favourite hotel's data from redux persist
              } else {
                isFavourite = true;
                const favouritedHotel = {
                  ...item,
                  isFavourite,
                };
                //  add/push favouritedHotel to redux persist in favourite hotel
              }



              temp.push({
                ...item,
                isFavourite,
              });
            } else {
              temp.push({...item});
            }
          });
        }
      }

      // set data hotel to redux persist
      return {items: temp};
    },
    bookingHotel: (state, action) => {
      let temp = [];
      const filteredHotel = state.items.filter((item) => item.id === action.payload.id);

      if (filteredHotel.length > 0) {
        if (state.items.length > 0) {
          
        }
      }
    },
  },
});

export const { addDataHotel, favouriteHotelToggle } = hotelSlice.actions;
export default hotelSlice.reducer;
