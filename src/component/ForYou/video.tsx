import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 14,
  },
  topVideo: {
    padding: 14,
  },
  topVideoImage: {
    width: '100%',
    height: 196,
    borderRadius: 8,
  },
  topVideoTitle: {
    fontSize: 20,
    fontWeight: '500',
    paddingTop: 10,
    paddingBottom: 10,
    lineHeight: 24,
    fontFamily: 'TT Commons',
  },
  topVideoRow: {
    display: 'flex',
  },
  topVideoName: {
    fontFamily: 'TT Commons',
    fontSize: 12,
  },
  topVideoTime: {
    fontFamily: 'TT Commons',
    fontSize: 12,
    color: '#828282',
  },
  trendingNowTitle: {
    marginLeft: 8,
    marginBottom: 12,
    fontSize: 20,
    fontFamily: 'TT Commons',
    color: '#333333',
    fontWeight: '600',
  },
  trendingNowImages: {
    display: 'flex',
    flexDirection: 'row',
  },
  videoShadow: {
    width: 254,
    height: 146,
    borderRadius: 4,
    marginRight: 12,
    display: 'flex',
  },
  videoShadowRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  videoShadowItem: {
    width: 194,
    height: 237,
    borderRadius: 8,
  },
  videoShadowItemTitle: {
    fontSize: 16,
    fontFamily: 'TT Commons',
    fontWeight: '500',
    width: 194,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

const renderTopVideo = () => {
  return (
    <View style={styles.topVideo}>
      <Image
        style={styles.topVideoImage}
        source={require('./images/video-2-shadow.jpg')}
      />
      <Text style={styles.topVideoTitle}>
        Lakers upgrade roster with Gabe Vincent and Taurean Prince but still
        have work to do
      </Text>
      <Text style={styles.topVideoRow}>
        <Text style={styles.topVideoName}>Jovan Buha</Text>
        <Text> · </Text>
        <Text style={styles.topVideoTime}>33 min ago</Text>
      </Text>
    </View>
  );
};
const renderGHVideoItems = () => {
  return Array(5)
    .fill(1)
    .map((_, index) => {
      return (
        <Image
          key={index}
          style={styles.videoShadow}
          source={require('./images/video-3-shadow.jpg')}
        />
      );
    });
};
const renderGameHighlights = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.trendingNowTitle}>Game Highlights</Text>
      <ScrollView horizontal>
        <View style={styles.trendingNowImages}>{renderGHVideoItems()}</View>
      </ScrollView>
    </View>
  );
};
const renderRVideoItem = () => {
  return (
    <View>
      <Image
        style={styles.videoShadowItem}
        source={require('./images/video-4-shadow.jpg')}
      />
      <Text style={styles.videoShadowItemTitle}>
        Lakeris Waive Mo Mamba and Shaquille Harrison
      </Text>
    </View>
  );
};
const renderRVideoItems = () => {
  return (
    <View style={styles.videoShadowRow}>
      {renderRVideoItem()}
      {renderRVideoItem()}
    </View>
  );
};
const renderRecommend = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.trendingNowTitle}>Game Highlights</Text>
      <View>{renderRVideoItems()}</View>
      <View>{renderRVideoItems()}</View>
    </View>
  );
};

export default () => {
  return (
    <>
      <View>{renderTopVideo()}</View>
      <View>{renderGameHighlights()}</View>
      <View>{renderRecommend()}</View>
    </>
  );
};
