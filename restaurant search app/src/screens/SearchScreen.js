import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
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
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      { errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null }
      <ScrollView>
        <RestaurantsList
          title='Cost Effective'
          restaurants={filterRestaurantsByPrice('$')}
        />
        <RestaurantsList
          title='Bit Pricier'
          restaurants={filterRestaurantsByPrice('$$')}
        />
        <RestaurantsList
          title='Big Spender'
          restaurants={filterRestaurantsByPrice('$$$')}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    marginLeft: 10,
    marginBottom: 10
  }
});

export default SearchScreen;
