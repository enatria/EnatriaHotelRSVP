1. Search Hotel By Query

Contoh fetch: 

const options = {
  method: 'GET',
  url: 'https://hotels-com-provider.p.rapidapi.com/v1/destinations/search',
  params: {query: 'jakarta', currency: 'USD', locale: 'en_US'},
  headers: {
    'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com',
    'x-rapidapi-key': '675e85c89emsh2396f7a6f504e16p130ccfjsn94ee725cf578'
  }
};