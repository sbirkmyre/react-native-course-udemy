import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import RestaurantsList from '../components/RestaurantsList';
import useRestaurants from '../hooks/useRestaurants';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterRestaurantsByPrice = price => {
    return restaurants.filter(restaurant => {
      return restaurant.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      { errorMessage ? <Text>{errorMessage}</Text> : null }
      <Text>We have found {restaurants.length} results</Text>
      <RestaurantsList
        title='Cost Effective'
        restaurants={filterRestaurantsByPrice('£')}
      />
      <RestaurantsList
        title='Bit Pricier'
        restaurants={filterRestaurantsByPrice('££')}
      />
      <RestaurantsList
        title='Big Spender'
        restaurants={filterRestaurantsByPrice('£££')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
