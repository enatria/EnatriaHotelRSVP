/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {KEY as FavKey} from '../utils';
import {transformAsync} from '@babel/core';

const userKey = 'user';
const bookKey = 'booked';

const setToLocal = async data => {
  await AsyncStorage.setItem(FavKey, JSON.stringify(data));
};

const userToLocal = async data => {
  await AsyncStorage.setItem(userKey, JSON.stringify(data));
};

const bookedToLocal = async data => {
  await AsyncStorage.setItem(bookKey, JSON.stringify(data));
};

const removeItem = async data => {
  await AsyncStorage.removeItem(data);
  return true;
};

const initialState = {
  items: [],
  user: null,
  favourites: [],
  booked: [],
};

const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    addDataHotel: (state, action) => {
      let temp = [];
      action.payload.map(item => {
        const findIndex = state.favourites.findIndex(
          hotel => hotel.id === item.id,
        );

        if (findIndex !== undefined && findIndex !== -1) {
          const update = {
            ...item,
            isFavourite: true,
          };
          temp.push(update);
        } else {
          temp.push(item);
        }
      });
      return {
        items: temp,
        favourites: state.favourites,
        user: state.user,
        booked: state.booked,
      };
    },
    addDataFavourite: (state, action) => {
      return {
        items: state.items,
        user: state.user,
        favourites: action.payload,
        booked: state.booked,
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
        booked: state.booked,
      };
    },
    bookingHotel: (state, action) => {
      console.log('action', action.payload);
      console.log('booked', state.booked);

      const itemIndex = state.booked.findIndex(
        item => item.id === action.payload.id,
      );

      if (itemIndex.length >= 0) {
        state.booked.bookQuantity = 1;
      } else {
        const newBook = {
          id: action.payload.id,
          hotel: action.payload.hotel,
          location: action.payload.location,
          photo: action.payload.photo,
          price: action.payload.price,
          rating: action.payload.rating,
        };

        console.log('temp', newBook);
        bookedToLocal(newBook).then(() => console.log('success'));
        state.booked.push(newBook);

        console.log('booked', state.booked);
      }
    },
    addUser: (state, action) => {
      const user = {
        email: action.payload.email,
        username: action.payload.username,
        token: action.payload.token,
        name: action.payload.name,
      };
      console.log('con2', user);
      userToLocal(user);
      return {...state, user};
    },
    addDataUser: (state, action) => {
      return {...state, user: action.payload};
    },
    logout: state => {
      return {...state, user: null};
    },
  },
});

export const {
  addDataHotel,
  addDataFavourite,
  favouriteHotelToggle,
  addUser,
  bookingHotel,
  logout,
  addDataUser,
} = hotelSlice.actions;
export default hotelSlice.reducer;
