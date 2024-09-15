import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': '44aaffac2dmsh2d4113a7d8bd482p1d3c68jsn5cc2878b971c',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
