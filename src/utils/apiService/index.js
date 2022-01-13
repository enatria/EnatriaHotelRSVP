/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const URL = 'https://hotels-com-provider.p.rapidapi.com/v1';
const HEADERS = {
  'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com',
  'x-rapidapi-key': '044f3a7cefmsh6560f6933d2bf3ap1084d5jsn99b6c3f4f7af',
};

const initialParams = {
  currency: 'USD',
  locale: 'in_ID',
};

export const getDestinations = query => {
  return {
    method: 'GET',
    url: URL + '/destinations/search',
    params: {query: query, ...initialParams},
    headers: HEADERS,
  };
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
      ...initialParams,
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
    ...initialParams,
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
  }, []);

  return {detail};
};
