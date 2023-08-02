import React, {useLayoutEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    paddingLeft: 12,
    paddingRight: 12,
  },
  image: {
    width: '49%',
    height: 104,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
});

export default ({navigation, route}: any) => {
  useLayoutEffect(() => {
    navigation.setOptions(
      {
        title: route.params?.title ?? '12',
      },
      [navigation],
    );
  });

  const renderRow = (key = '') => {
    return (
      <View style={styles.row} key={key}>
        <Image
          key={`${key}-a`}
          style={styles.image}
          source={require('./banner.jpg')}
        />
        <Image
          key={`${key}-b`}
          style={styles.image}
          source={require('./banner.jpg')}
        />
      </View>
    );
  };
  const renderContent = () => {
    return Array(6)
      .fill(1)
      .map((_, key) => renderRow(key.toString()));
  };

  return <View style={styles.container}>{renderContent()}</View>;
};
