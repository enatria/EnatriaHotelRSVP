/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {KEY as FavKey} from '../utils';
import {transformAsync} from '@babel/core';

const setToLocal = async data => {
  await AsyncStorage.setItem(FavKey, JSON.stringify(data));
};

const initialState = {
  items: [],
  user: null,
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
    addDataFavourite: (state, action) => {
      return {
        items: state.items,
        user: state.user,
        favourites: action.payload,
      };
    },
    favouriteHotelToggle: (state, action) => {
      let temp = [];
      let dataFav;
      let isFavourite;
      const filteredHotel = state.items.filter(
        item => item.id === action.payload.id,
      );

      const toggle = dataItem => {
        if (action.payload.isFavourite) {
          // jika hotel tersebut sebelumnya sudah ditambahkan ke favourite(maka akan dihapus)
          const index = state.favourites.findIndex(
            itemFav => itemFav.id === action.payload.id,
          );

          if (index !== -1) {
            dataFav = [...state.favourites];
            dataFav.splice(index, 1);
            isFavourite = false;
          }
        } else {
          // jika sebelumnya hotel belum ditambahkan ke favourite (maka akan ditambahkan)
          isFavourite = true;
          const favouritedHotel = {
            ...dataItem,
            isFavourite,
          };

          if (state.favourites === undefined || state.favourites.length < 1) {
            dataFav = [];
            dataFav.push(favouritedHotel);
          } else {
            dataFav = [...state.favourites, favouritedHotel];
          }
        }
      };

      if (filteredHotel !== undefined && filteredHotel.length > 0) {
        if (state.items !== undefined && state.items.length > 0) {
          state.items.map(item => {
            if (item.id === action.payload.id) {
              toggle(item);

              temp.push({
                ...item,
                isFavourite,
              });
            } else {
              temp.push({...item});
            }
          });
        }
      } else {
        state.favourites.map(item => {
          if (item.id === action.payload.id) {
            toggle(item);
          }
        });
      }

      setToLocal(dataFav).then(() => console.log('success'));

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
    addUser: async (state, action) => {
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
        await AsyncStorage.setItem('user', JSON.stringify(state.user));
      }
    },
    logout: async () => {
      await AsyncStorage.removeItem('user');
    },
  },
});

export const {
  addDataHotel,
  addDataFavourite,
  favouriteHotelToggle,
  addUser,
  logout,
} = hotelSlice.actions;
export default hotelSlice.reducer;
