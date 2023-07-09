import React from 'react';
import {Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 350,
  },
});

export default () => {
  return (
    <Image style={styles.banner} source={require('./images/banner.jpg')} />
  );
};
