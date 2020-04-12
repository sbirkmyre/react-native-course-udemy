import { useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [restaurant, setRestaurant] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const getRestaurant = async id => {
    try {
      const response = await yelp.get(`/${id}`);
      setRestaurant(response.data);
    }
    catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  return[getRestaurant, restaurant, errorMessage];
};
