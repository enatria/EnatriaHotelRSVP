/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import axios from 'axios';

const URL = 'https://hotels-com-provider.p.rapidapi.com/v1';
const HEADERS = {
  'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com',
  'x-rapidapi-key': '675e85c89emsh2396f7a6f504e16p130ccfjsn94ee725cf578',
};

export const getDestinationId = (query = query) => {
  const options = {
    method: 'GET',
    url: URL + '/destinations/search',
    params: {query: query, currency: 'IDR', locale: 'in_ID'},
    headers: HEADERS,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return response;
    })
    .catch(function (error) {
      console.error(error);
      return error;
    });
};

export const getHotels = params => {
  return {
    method: 'GET',
    url: URL + '/hotels/search',
    params: {
      checkin_date: params.checkin_date,
      checkout_date: params.checkout_date,
      sort_order: 'STAR_RATING_HIGHEST_FIRST',
      destination_id: params.destination_id,
      adults_number: params.adults_number,
      locale: 'en_US',
      currency: 'USD',
      guest_rating_min: '4',
    },
    headers: HEADERS,
  };

};

export const getDetails = params => {
  const options = {
    method: 'GET',
    url: URL + '/hotels/booking-details',
    params: {
      adults_number: params.adults_number,
      checkin_date: params.checkin_date,
      locale: 'en_US',
      currency: 'USD',
      hotel_id: params.hotel_id,
      checkout_date: params.checkout_date,
    },
    headers: HEADERS,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return response;
    })
    .catch(function (error) {
      console.error(error);
      return error;
    });
};
