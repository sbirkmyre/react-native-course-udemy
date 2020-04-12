import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';
import useRestaurant from '../hooks/useRestaurant';

const RestaurantShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [getRestaurant, restaurant, errorMessage] = useRestaurant();

  useEffect(() => {
    getRestaurant(id);
  }, []);

  if(!restaurant) {
    return null;
  }

  return (
    <View>
      <View style={styles.address}>
        <Text style={styles.name}>{restaurant.name}</Text>
        { restaurant.phone !== "" ? <Text>Phone: {restaurant.phone}</Text> : null }
        { restaurant.location.address1 !== "" ? <Text>Street Address: {restaurant.location.address1}</Text> : null }
        { restaurant.location.city !== "" ? <Text>City: {restaurant.location.city}</Text> : null }
        { restaurant.location.country !== "" ? <Text>Country: {restaurant.location.country}</Text> : null }
        { restaurant.location.state !== "" ? <Text>State: {restaurant.location.state}</Text> : null }
        { restaurant.location.zip_code !== "" ? <Text>Zip Code: {restaurant.location.zip_code}</Text> : null }
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurant.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <Image style={styles.image} source={{ uri: item }} />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  address: {
    fontSize: 16,
    marginBottom: 5,
    marginHorizontal: 10
  },
  image: {
    height:120,
    width: 250,
    marginBottom: 10,
    marginHorizontal: 10
  }
});

export default RestaurantShowScreen;
