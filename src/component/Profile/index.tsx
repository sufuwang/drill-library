import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'TT Commons',
    color: '#333333',
    fontWeight: '600',
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  header: {
    padding: 20,
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftText: {
    marginLeft: 8,
  },
  headerLeftTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  headerLeftDesc: {
    marginTop: 6,
    fontSize: 16,
    color: '#aaa',
  },
  headerPencil: {
    width: 20,
    height: 20,
  },
  following: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  followingText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  followingAvatar: {
    display: 'flex',
    flexDirection: 'row',
  },
  followingAvatarItem: {
    marginRight: 14,
  },
  followingAvatarDesc: {
    marginTop: 4,
  },
  settingsItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingsItemIcon: {
    width: 26,
    height: 26,
  },
  settingsItemBody: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#efefef',
    borderBottomWidth: 1,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
  },
  settingsItemBodyText: {
    fontSize: 16,
  },
});

export default () => {
  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            style={styles.avatar}
            source={require('./images/avatar.jpg')}
          />
          <View style={styles.headerLeftText}>
            <Text style={styles.headerLeftTitle}>UserName</Text>
            <Text style={styles.headerLeftDesc}>Bio</Text>
          </View>
        </View>
        <Image
          style={styles.headerPencil}
          source={require('./images/pencil.jpg')}
        />
      </View>
    );
  };
  const renderFollowingAvatar = () => {
    return (
      <View style={styles.followingAvatarItem}>
        <Image style={styles.avatar} source={require('./images/avatar.jpg')} />
        <Text style={styles.followingAvatarDesc}>L. James</Text>
      </View>
    );
  };
  const renderFollowing = () => {
    return (
      <View style={styles.following}>
        <View style={styles.followingText}>
          <Text style={styles.headerLeftTitle}>Following</Text>
          <Text style={styles.headerLeftDesc}>Edit</Text>
        </View>
        <View style={styles.followingAvatar}>
          {renderFollowingAvatar()}
          {renderFollowingAvatar()}
        </View>
      </View>
    );
  };
  const renderSettings = () => {
    const data = ['Account', 'Bookmarks', 'Push Notifications', 'Help'];
    return (
      <View style={styles.following}>
        <View style={styles.followingText}>
          <Text style={styles.headerLeftTitle}>Settings</Text>
        </View>
        <View style={styles.settingsItem}>
          <Image
            style={styles.settingsItemIcon}
            source={require('./images/icon1.jpg')}
          />
          <View style={styles.settingsItemBody}>
            <Text style={styles.settingsItemBodyText}>{data[0]}</Text>
            <Image
              style={styles.settingsItemIcon}
              source={require('./images/arrow.jpg')}
            />
          </View>
        </View>
        <View style={styles.settingsItem}>
          <Image
            style={styles.settingsItemIcon}
            source={require('./images/icon2.jpg')}
          />
          <View style={styles.settingsItemBody}>
            <Text style={styles.settingsItemBodyText}>{data[1]}</Text>
            <Image
              style={styles.settingsItemIcon}
              source={require('./images/arrow.jpg')}
            />
          </View>
        </View>
        <View style={styles.settingsItem}>
          <Image
            style={styles.settingsItemIcon}
            source={require('./images/icon3.jpg')}
          />
          <View style={styles.settingsItemBody}>
            <Text style={styles.settingsItemBodyText}>{data[2]}</Text>
            <Image
              style={styles.settingsItemIcon}
              source={require('./images/arrow.jpg')}
            />
          </View>
        </View>
        <View style={styles.settingsItem}>
          <Image
            style={styles.settingsItemIcon}
            source={require('./images/icon4.jpg')}
          />
          <View style={styles.settingsItemBody}>
            <Text style={styles.settingsItemBodyText}>{data[3]}</Text>
            <Image
              style={styles.settingsItemIcon}
              source={require('./images/arrow.jpg')}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      <Text style={styles.title}>Profile</Text>
      {renderHeader()}
      {renderFollowing()}
      {renderSettings()}
    </>
  );
};
