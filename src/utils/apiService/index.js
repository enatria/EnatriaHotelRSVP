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
