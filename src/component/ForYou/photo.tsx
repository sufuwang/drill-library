import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Carousel} from 'react-native-ui-lib';

const styles = StyleSheet.create({
  topNews: {
    width: '100%',
    height: 322 + 28,
    padding: 14,
  },
  topNewsImage: {
    width: 70,
    height: 18,
    borderRadius: 8,
    marginTop: 12,
  },
  topNewsTitle: {
    fontSize: 20,
    fontWeight: '500',
    paddingTop: 10,
    paddingBottom: 10,
    lineHeight: 24,
    fontFamily: 'TT Commons',
  },
  topNewsRow: {
    display: 'flex',
  },
  topNewsName: {
    fontFamily: 'TT Commons',
    fontSize: 12,
  },
  topNewsTime: {
    fontFamily: 'TT Commons',
    fontSize: 12,
    color: '#828282',
  },
  imgShadow: {
    width: '100%',
    height: 205,
    borderRadius: 4,
  },
  line: {
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderColor: '#dedede',
  },
});

const renderCarousel = () => {
  return new Array(5)
    .fill(0)
    .map((_, index) => (
      <Image
        key={index}
        style={styles.imgShadow}
        source={require('./images/img-shadow.jpg')}
      />
    ));
};
const renderTopNews = () => {
  return (
    <View style={styles.topNews}>
      <View style={styles.line}>
        <Carousel autoplay loop showCounter autoplayInterval={4000}>
          {renderCarousel()}
        </Carousel>
        <Image
          style={styles.topNewsImage}
          source={require('./images/photo-shadow.jpg')}
        />
        <Text style={styles.topNewsTitle}>
          Lakers upgrade roster with Gabe Vincent and Taurean Prince but still
          have work to do
        </Text>
        <Text style={styles.topNewsRow}>
          <Text style={styles.topNewsName}>Jovan Buha</Text>
          <Text> · </Text>
          <Text style={styles.topNewsTime}>33 min ago</Text>
        </Text>
      </View>
    </View>
  );
};

export default () => {
  return (
    <>
      <View>{renderTopNews()}</View>
      <View>{renderTopNews()}</View>
      <View>{renderTopNews()}</View>
    </>
  );
};
