import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, FlatList } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const buttons = [
    { name: 'Components', buttonText: 'Go to Components Demo' },
    { name: 'List', buttonText: 'Go to List Demo' },
    { name: 'Image', buttonText: 'Go to Image Demo' },
    { name: 'Counter', buttonText: 'Go to Counter Demo' },
    { name: 'Colour', buttonText: 'Go to Colour Demo' },
    { name: 'Square', buttonText: 'Go to Square Demo' },
    { name: 'Text', buttonText: 'Go to Text Demo' },
    { name: 'Box', buttonText: 'Go to Box Demo' }
  ];

  return (
    <View>
      <Text style={styles.text}>The demos below have been coded to understand some of the basic topics in the world of React Native.</Text>
      <FlatList style={styles.buttonList}
        keyExtractor={button => button.name}
        data={buttons}
        renderItem={({ item }) => {
          return (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(`${item.name}`)}>
              <Text style={styles.buttonText}>{item.buttonText}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonList: {
    padding: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'rgb(33, 150, 243)',
    marginVertical: 10,
    padding: 10
  },
  buttonText: {
    color: 'white'
  },
  text: {
    fontSize: 18,
    padding: 10
  }
});

export default HomeScreen;
