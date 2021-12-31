# Get Started

## Dokumentasi Penggunaan API pada Aplikasi 

1. Search Destinations By Query

```
const options = {
  method: 'GET',
  url: 'https://hotels-com-provider.p.rapidapi.com/v1/destinations/search',
  params: {query: 'jakarta', currency: 'IDR', locale: 'in_ID'},
  headers: {
    'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com',
    'x-rapidapi-key': '675e85c89emsh2396f7a6f504e16p130ccfjsn94ee725cf578'
  }
};

```

- Query -> input from form
- Currency default
- locale default
- result : suggestion in array with different group -> different name again in array

>get That destination ID to get list of hotel

2. Seach Hotels
```
const options = {
  method: 'GET',
  url: 'https://hotels-com-provider.p.rapidapi.com/v1/hotels/search',
  params: {
    checkin_date: '2022-03-26',
    checkout_date: '2022-03-27',
    sort_order: 'STAR_RATING_HIGHEST_FIRST',
    destination_id: '1721646',
    adults_number: '1',
    locale: 'en_US',
    currency: 'USD',
    guest_rating_min: '4'
  },
  headers: {
    'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com',
    'x-rapidapi-key': '675e85c89emsh2396f7a6f504e16p130ccfjsn94ee725cf578'
  }
};

```

- destination Id didapat dari fetching API berdasarkan query
- checkin & checkout dari input form
- Lainnya default

- The result = searchResults->results

3. Booking Details of Hotel
```
const options = {
  method: 'GET',
  url: 'https://hotels-com-provider.p.rapidapi.com/v1/hotels/booking-details',
  params: {
    adults_number: '1',
    checkin_date: '2022-03-26',
    locale: 'en_US',
    currency: 'USD',
    hotel_id: '363464',
    checkout_date: '2022-03-27'
  },
  headers: {
    'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com',
    'x-rapidapi-key': '675e85c89emsh2396f7a6f504e16p130ccfjsn94ee725cf578'
  }
};
```

- checkin & checkin dr form, nanti disimpen di state trs passing aja
- hotel_id dari card hotel dari hasil list hotel point 2

4. Photos of Hotel
> Hampir mirip sama details API

```
const options = {
  method: 'GET',
  url: 'https://hotels-com-provider.p.rapidapi.com/v1/hotels/photos',
  params: {hotel_id: '363464'},
  headers: {
    'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com',
    'x-rapidapi-key': '675e85c89emsh2396f7a6f504e16p130ccfjsn94ee725cf578'
  }
};

```

- Result = array ada baseURl dan mainURL

5. Review Of the Hotel
```
const options = {
  method: 'GET',
  url: 'https://hotels-com-provider.p.rapidapi.com/v1/hotels/reviews',
  params: {locale: 'en_US', hotel_id: '363464', page_number: '1'},
  headers: {
    'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com',
    'x-rapidapi-key': '675e85c89emsh2396f7a6f504e16p130ccfjsn94ee725cf578'
  }
};
```
