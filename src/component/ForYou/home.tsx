import * as React from 'react';
import {Image, StyleSheet, View, Text, ScrollView} from 'react-native';
import {Carousel} from 'react-native-ui-lib';

const styles = StyleSheet.create({
  carousel: {
    height: 205,
    paddingLeft: 14,
    paddingRight: 14,
  },
  imgShadow: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
  container: {
    width: '100%',
    padding: 14,
  },
  topHeadlines: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
  },
  topHeadlinesTitle: {
    marginLeft: 8,
    marginTop: 12,
    fontSize: 20,
    fontFamily: 'TT Commons',
    color: '#333333',
    fontWeight: '600',
  },
  topHeadlineItem: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-start',
    padding: 12,
    borderBottomColor: '#d9d9d9',
    borderBottomWidth: 2,
  },
  topHeadlineItemIndex: {
    width: 16,
    height: 16,
    backgroundColor: '#d9d9d9',
    lineHeight: 16,
    textAlign: 'center',
    borderRadius: 2,
  },
  topHeadlineItemContent: {
    marginLeft: 8,
    marginRight: 4,
  },
  topHeadlineItemDate: {
    color: '#979797',
    fontSize: 12,
  },
  trendingNow: {},
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
    width: 144,
    height: 232,
    borderRadius: 8,
    marginRight: 12,
    display: 'flex',
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
const dataTopHeadlines = [
  {content: 'Lakers select Jalen Hood-Schifino', date: '2h ago'},
  {content: 'Cole Swider 2023 Lakers Player Capsule', date: '4h ago'},
  {content: 'Scotty Pippen Jr. 2023 Lakers Player Capsule', date: '7h ago'},
  {content: 'Laker announce 2023-24 Preseason Schedule', date: '1d ago'},
  {content: 'Mo Bamba 2022-23 Season Highlights', date: '11h ago'},
];
const renderTopHeadlines = () => {
  return dataTopHeadlines.map(({content, date}, index) => {
    return (
      <View key={content} style={styles.topHeadlineItem}>
        <Text style={styles.topHeadlineItemIndex}>{index}</Text>
        <Text style={styles.topHeadlineItemContent}>{content}</Text>
        <Text style={styles.topHeadlineItemDate}>{date}</Text>
      </View>
    );
  });
};
const renderTrendingNow = () => {
  return (
    <>
      <Image
        style={styles.videoShadow}
        source={require('./images/video-shadow.jpg')}
      />
      <Image
        style={styles.videoShadow}
        source={require('./images/video-shadow.jpg')}
      />
      <Image
        style={styles.videoShadow}
        source={require('./images/video-shadow.jpg')}
      />
      <Image
        style={styles.videoShadow}
        source={require('./images/video-shadow.jpg')}
      />
      <Image
        style={styles.videoShadow}
        source={require('./images/video-shadow.jpg')}
      />
    </>
  );
};

export default () => {
  return (
    <>
      <View style={styles.carousel}>
        <Carousel autoplay loop showCounter autoplayInterval={4000}>
          {renderCarousel()}
        </Carousel>
      </View>
      <View style={styles.container}>
        <View style={styles.topHeadlines}>
          <Text style={styles.topHeadlinesTitle}>Top Headlines</Text>
          {renderTopHeadlines()}
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.trendingNow}>
          <Text style={styles.trendingNowTitle}>Trending Now</Text>
          <ScrollView horizontal>
            <View style={styles.trendingNowImages}>{renderTrendingNow()}</View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};
