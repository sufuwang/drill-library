import {Link} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  roster: {
    backgroundColor: 'white',
  },
  item: {
    width: '100%',
    padding: 24,
    display: 'flex',
    flexDirection: 'row',
    borderBlockColor: '#eee',
    borderBottomWidth: 1,
  },
  itemImage: {
    width: 110,
    height: 90,
    borderRadius: 4,
  },
  itemContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 18,
  },
  itemContainerDesc: {},
  itemContainerDescTitle: {
    fontFamily: 'League Gothic',
    fontSize: 24,
    fontWeight: '500',
  },
  itemContainerDescText: {
    paddingTop: 4,
  },
});

export default () => {
  const renderItem = () => {
    return (
      <View style={styles.item}>
        <Image
          style={styles.itemImage}
          source={require('./images/banner.jpg')}
        />
        <View style={styles.itemContainer}>
          <View style={styles.itemContainerDesc}>
            <Text style={styles.itemContainerDescTitle}>
              5 | G Malik Beasley
            </Text>
            <Text style={styles.itemContainerDescText}>Florida</Text>
          </View>
          <Image source={require('./images/arrow.jpg')} />
        </View>
      </View>
    );
  };

  const renderAll = () => {
    return Array(10)
      .fill(0)
      .map((_, key) => (
        <Link key={key} to={{screen: 'Player'}}>
          {renderItem()}
        </Link>
      ));
  };

  return (
    <View style={styles.roster}>
      <ScrollView>{renderAll()}</ScrollView>
    </View>
  );
};
