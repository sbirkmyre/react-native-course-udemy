import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const RestaurantShowScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null);
  const id = navigation.getParam('id');

  const getRestaurant = async id => {
    const response = await yelp.get(`/${id}`);
    setRestaurant(response.data);
  };

  useEffect(() => {
    getRestaurant(id);
  }, []);

  if(!restaurant) {
    return null;
  }

  return (
    <View>
      <Text style={styles.name}>{restaurant.name}</Text>
      <FlatList
        style={styles.list}
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
    marginLeft: 10,
    marginBottom: 5
  },
  list: {
    marginHorizontal: 10
  },
  image: {
    height:120,
    width: 250,
    marginBottom: 10
  }
});

export default RestaurantShowScreen;
