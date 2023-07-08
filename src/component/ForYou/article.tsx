import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  headTitle: {
    paddingLeft: 14,
    fontFamily: 'TT Commons',
    fontSize: 20,
    fontWeight: '600',
  },
  topNews: {
    padding: 14,
  },
  topNewsImage: {
    width: '100%',
    height: 196,
    borderRadius: 8,
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
  newsItem: {
    marginLeft: 14,
    marginRight: 14,
    paddingTop: 14,
    paddingBottom: 14,
    display: 'flex',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#dedede',
  },
  lastNewsItem: {
    marginLeft: 14,
    marginRight: 14,
    paddingTop: 14,
    paddingBottom: 14,
    display: 'flex',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#dedede',
  },
  newsItemImage: {
    width: 120,
    height: 80,
    borderRadius: 8,
  },
  newsItemContent: {
    flex: 1,
    paddingLeft: 14,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  newsItemContentTitle: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'TT Commons',
  },
  people: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 14,
    paddingLeft: 14,
    alignItems: 'center',
  },
  peopleAvatar: {
    marginRight: 14,
    width: 43,
    height: 43,
    borderRadius: 43,
  },
  peopleInfo: {},
  peopleInfoName: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'TT Commons',
  },
  peopleInfoFollow: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'TT Commons',
    color: '#828282',
  },
});

const renderTopNews = () => {
  return (
    <View style={styles.topNews}>
      <Image
        style={styles.topNewsImage}
        source={require('./images/img-shadow.jpg')}
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
  );
};
const renderNewsItem = ({
  key = 0,
  title = 'defaultTitle',
  name = 'defaultName',
  time = 'defaultTime',
  isLast = false,
} = {}) => {
  return (
    <View key={key} style={isLast ? styles.lastNewsItem : styles.newsItem}>
      <Image
        style={styles.newsItemImage}
        source={require('./images/img-shadow.jpg')}
      />
      <View style={styles.newsItemContent}>
        <Text style={styles.newsItemContentTitle}>{title}</Text>
        <Text style={styles.topNewsRow}>
          <Text style={styles.topNewsName}>{name}</Text>
          <Text> · </Text>
          <Text style={styles.topNewsTime}>{time}</Text>
        </Text>
      </View>
    </View>
  );
};
const renderNews = (count = 0) => {
  const data = [
    {
      title: 'Lakers Announce 2023 Summer Legue Roster',
      name: 'Laln Kioski',
      time: '2 hr ago',
    },
    {
      title: 'Lakers Waive Mo Bamba and Shaquille Harrison',
      name: 'Laln Kioski',
      time: '5 hr ago',
    },
    {
      title: "From the Rafters: Dont't Poke Bron",
      name: 'Taylor Gaes',
      time: '5 hr ago',
    },
  ];
  return new Array(count).fill(1).map((_, index) => {
    return renderNewsItem({
      ...data[index],
      key: index,
      isLast: index === count - 1,
    });
  });
};
const renderPeopleInfo = () => {
  return (
    <View style={styles.people}>
      <Image
        style={styles.peopleAvatar}
        source={require('./images/avatar-shadow.jpg')}
      />
      <View style={styles.peopleInfo}>
        <Text style={styles.peopleInfoName}>LeBron James</Text>
        <Text style={styles.peopleInfoFollow}>You follow this player</Text>
      </View>
    </View>
  );
};

export default () => {
  return (
    <>
      <Text style={styles.headTitle}>Top News</Text>
      <View>{renderTopNews()}</View>
      <View>{renderNews(3)}</View>
      <View>{renderPeopleInfo()}</View>
      <View>{renderTopNews()}</View>
      <View>{renderNews(2)}</View>
    </>
  );
};
