/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  items: [],
  user: AsyncStorage.getItem('user'),
  favourites: [],
};

const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    addDataHotel: (state, action) => {
      // set data hotel to redux persist
      return {
        items: action.payload,
        favourites: state.favourites,
        user: state.user,
      };
    },
    favouriteHotelToggle: (state, action) => {
      let temp = [];
      let dataFav;
      const filteredHotel = state.items.filter(
        item => item.id === action.payload.id,
      );

      if (filteredHotel.length > 0) {
        if (state.items.length > 0) {
          state.items.map(item => {
            if (item.id === action.payload.id) {
              let isFavourite;
              if (action.payload.isFavourite) {
                const index = state.favourites.findIndex(itemFav => itemFav.id === action.payload.id);

                if (index !== -1) {
                  dataFav = [...state.favourites];
                  dataFav.splice(index, 1);
                  isFavourite = false;
                }
              } else {
                isFavourite = true;
                const favouritedHotel = {
                  ...item,
                  isFavourite,
                };

                if (state.favourites === undefined || state.favourites.length < 1) {
                  dataFav = [];
                  dataFav.push(favouritedHotel);
                } else {
                  dataFav = [...state.favourites, favouritedHotel];
                }
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

      return {
        items: temp,
        favourites: dataFav,
        user: state.user,
      };
    },
    bookingHotel: (state, action) => {
      let temp = [];
      const filteredHotel = state.items.filter(
        item => item.id === action.payload.id,
      );

      if (filteredHotel.length > 0) {
        if (state.items.length > 0) {
        }
      }
    },
    addUser: (state, action) => {
      console.log('state', state);
      if (state.user) {
        state.user = {
          username: state.username,
          token: state.token,
          firstName: action.payload.firstname,
          lastName: action.payload.lastname,
          email: action.payload.email,
        };
      } else {
        state.user = {
          username: action.payload.username,
          token: action.payload.token,
          name: 'Giwang',
        };
        console.log('con2', state);
        AsyncStorage.setItem('user', JSON.stringify(state.user));
      }
    },
    logout: () => {
      AsyncStorage.removeItem('user');
    },
  },
});

export const {addDataHotel, favouriteHotelToggle, addUser, logout} =
  hotelSlice.actions;
export default hotelSlice.reducer;
