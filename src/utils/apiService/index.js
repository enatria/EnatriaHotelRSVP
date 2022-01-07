/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUser} from '../';
const URL = 'https://hotels-com-provider.p.rapidapi.com/v1';
const HEADERS = {
  'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com',
  'x-rapidapi-key': 'b2366ddd6dmsh2094aa49f94b980p1f2310jsna6e05f740783',
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

export const useGetDetails = params => {
  const [detail, setDetail] = useState(null);

  const data = {
    adults_number: params.adults_number,
    checkin_date: params.checkin_date,
    locale: 'in_ID',
    currency: 'IDR',
    hotel_id: params.hotel_id,
    checkout_date: params.checkout_date,
  };

  const optionsDetail = {
    method: 'GET',
    url: URL + '/hotels/booking-details',
    params: data,
    headers: HEADERS,
  };

  const optionsReview = {
    method: 'GET',
    url: URL + '/hotels/reviews',
    params: data,
    headers: HEADERS,
  };

  async function fetchData() {
    try {
      const details = await axios.request(optionsDetail);
      const reviews = await axios.request(optionsReview);

      var allDetail = Object.assign(details.data, reviews.data);
      console.log('detailNIh', allDetail);
      setDetail(allDetail);
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  useEffect(() => {
    fetchData();
  }, [params]);

  return {detail};
};
