import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import requests from '../../requests';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request.data.results);
    }
    fetchData();
  }, []);

  return <header></header>;
}

export default Banner;
