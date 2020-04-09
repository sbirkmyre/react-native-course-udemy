import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import RestaurantDetails from '../components/RestaurantDetails';

const RestaurantsList = ({ title, restaurants, navigation }) => {
if (!restaurants.length) {
  return null;
}

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        data={restaurants}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('RestaurantShow', {id: item.id})}>
              <RestaurantDetails restaurant={item}/>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  list: {
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 5
  }
});

export default withNavigation(RestaurantsList);
