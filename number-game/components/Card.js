import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
  return <View style={{ ...styles.cart, ...props.style }}>{props.children}</View>;
};

const styles = StyleSheet.create({
  cart: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    // shadow for android
    elevation: 5,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
