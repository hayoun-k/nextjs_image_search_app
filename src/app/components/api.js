import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID UEsMWcDYP6qI-6nTGBMK3TxLZsowBv4Tc8bQzg7Apaw'
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;