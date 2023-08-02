import React, {useLayoutEffect} from 'react';
import {Image, StyleSheet, View, Text, ScrollView} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  banner: {
    width: '100%',
    height: 246,
  },
  body: {
    padding: 16,
  },
  title: {
    fontFamily: 'TT Commons',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 26,
    letterSpacing: 0,
    textAlign: 'left',
  },
  author: {
    marginTop: 14,
    paddingBottom: 14,
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#EFEFEF',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 36,
  },
  authorInfo: {
    marginLeft: 8,
    paddingRight: 16,
  },
  authorInfoName: {
    fontFamily: 'TT Commons',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'left',
  },
  authorInfoDate: {
    color: '#828282',
  },
  text: {
    marginTop: 18,
    color: '#48494A',
  },
  comments: {
    paddingTop: 18,
    marginTop: 18,
    borderTopWidth: 1,
    borderColor: '#EFEFEF',
  },
  commentTitle: {
    fontFamily: 'TT Commons',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    marginBottom: 18,
  },
  comment: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 18,
    marginLeft: 0,
  },
  context: {
    width: 360,
    paddingTop: 8,
    paddingBottom: 8,
  },
  commentRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commentRowRight: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '14px',
  },
  commentRowRightLike: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 10,
  },
  commentRowRightImage: {
    width: 16,
    height: 16,
    marginRight: 2,
  },
  isRetractComment: {
    marginLeft: 40,
  },
  isRetractContext: {
    width: 320,
  },
});

export default ({navigation}: any) => {
  useLayoutEffect(() => {
    navigation.setOptions(
      {
        title: '',
      },
      [navigation],
    );
  });

  const renderComment = ({
    text,
    count,
    isRetract,
  }: {
    text: string;
    count: number;
    isRetract?: boolean;
  }) => {
    const comment = isRetract
      ? {...styles.comment, ...styles.isRetractComment}
      : styles.comment;
    const context = isRetract
      ? {...styles.context, ...styles.isRetractContext}
      : styles.context;
    return (
      <View style={comment}>
        <Image style={styles.avatar} source={require('./images/avatar.jpg')} />
        <View>
          <View style={styles.authorInfo}>
            <Text style={styles.authorInfoName}>UserInfo</Text>
            <Text style={context}>{text}</Text>
            <View style={styles.commentRow}>
              <Text style={styles.authorInfoDate}>Jul 7, 2023, 08:30 PM</Text>
              <View style={styles.commentRowRight}>
                <View style={styles.commentRowRightLike}>
                  <Image
                    style={styles.commentRowRightImage}
                    source={require('./images/like.jpg')}
                  />
                  <Text>{count}</Text>
                </View>
                <Image
                  style={styles.commentRowRightImage}
                  source={require('./images/edit.jpg')}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.banner} source={require('./images/banner.jpg')} />
        <View style={styles.body}>
          <Text style={styles.title}>
            Lakers Announce 2023-24 Preseason Schedule, Presented by Delta Air
            Lines
          </Text>
          <View style={styles.author}>
            <Image
              style={styles.avatar}
              source={require('./images/avatar.jpg')}
            />
            <View style={styles.authorInfo}>
              <Text style={styles.authorInfoName}>Tim MacMahon</Text>
              <Text style={styles.authorInfoDate}>Jul 7, 2023, 08:30 PM</Text>
            </View>
          </View>
          <Text style={styles.text}>
            UPDATE -- A preseason game in Anaheim at Honda Center on Wednesday,
            Oct. 11, with a scheduled tip of 7 p.m. PT against the Sacramento
            Kings has been added to the Lakers schedule.
          </Text>
          <Text style={styles.text}>
            The Los Angeles Lakers announced the team’s 2023-24 preseason
            schedule, presented by Delta Air Lines. The slate is highlighted by
            two home games at Crypto.com Arena, as well as contests in Las Vegas
            and Greater Palm Springs and Anaheim.
          </Text>
          <Text style={styles.text}>
            Los Angeles will open the preseason on the road at Golden State on
            Oct. 7 at Chase Center, before heading to Las Vegas for a matchup
            versus Brooklyn on Oct. 9 inside T-Mobile Arena. Then the Lakers
            will head to Anaheim on October 11 to face the Kings at Honda
            Center. The purple and gold will then host two consecutive home
            games at Crypto.com Arena against Golden State on Oct. 13 and
            Milwaukee on Oct. 15. The Lakers will finish out the preseason by
            hosting Phoenix in Greater Palm Springs on Oct. 19 at Acrisure
            Arena.
          </Text>
          <View style={styles.comments}>
            <Text style={styles.commentTitle}>Comments</Text>
            {renderComment({
              text: 'Saturday, September 19th doesn’t exist?',
              count: 540,
            })}
            {renderComment({
              text: '8pm on a Saturday night, no thought for the fans attending games as usual.',
              count: 300,
            })}
            {renderComment({
              text: '@UserName 8pm games are much better to watch though, more evening less day time for the tv viewer',
              count: 40,
              isRetract: true,
            })}
            {renderComment({
              text: 'Nice 👍',
              count: 3,
              isRetract: true,
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
