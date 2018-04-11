import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Header = () => {
  return <Text style={style.textStyle}>Albums</Text>
}

const style = StyleSheet.create({
  textStyle: {
    fontSize: 20
  }
});

export default Header;
