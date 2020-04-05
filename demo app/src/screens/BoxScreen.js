import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 120
  },
  viewOneStyle: {
    backgroundColor: 'red',
    height: 60,
    width:100
  },
  viewTwoStyle: {
    backgroundColor: 'green',
    height: 60,
    width:100,
    alignSelf:'flex-end'
  },
  viewThreeStyle: {
    backgroundColor: 'purple',
    height: 60,
    width:100
  }
});

export default BoxScreen;
