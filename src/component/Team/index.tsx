import {Link} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
// import Table from '../Table';
import Table from '../../page/statistics';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'TT Commons',
    color: '#333333',
    fontWeight: '600',
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  },
  header: {
    height: 42,
    display: 'flex',
    flexDirection: 'row',
    borderColor: '#d9d9d9',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerImage: {
    width: 101,
    height: 24,
  },
  banner: {
    padding: 14,
  },
  bannerImage: {
    width: '100%',
    height: 190,
  },
  SA: {
    padding: 14,
  },
  SATitleRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  SATitle: {
    fontFamily: 'TT Commons',
    color: '#333333',
    fontWeight: '600',
    fontSize: 16,
    paddingRight: 10,
  },
  SADesc: {
    fontFamily: 'TT Commons',
    color: '#333333',
    fontWeight: '400',
    fontSize: 12,
  },
  SARow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 12,
  },
  SARowItem: {
    display: 'flex',
    alignItems: 'center',
  },
  SARowTitle: {
    fontFamily: 'League Gothic',
    color: '#333333',
    fontWeight: '600',
    fontSize: 22,
  },
  SARowDesc: {
    color: '#666666',
    fontSize: 12,
  },
  teamLeaderItem: {
    width: 80,
    height: 134,
    marginRight: 10,
  },
  SAContent: {
    display: 'flex',
    flexDirection: 'row',
  },
  SAContentLeft: {
    // width: 30,
  },
  SAContentLeftTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'League Gothic',
    backgroundColor: '#d9d9d9',
    lineHeight: 40,
    paddingLeft: 14,
    paddingRight: 14,
  },
  SAContentLeftBody: {
    paddingLeft: 16,
    paddingTop: 4,
    display: 'flex',
    borderRightColor: '#eeeeee',
    borderRightWidth: 1,
  },
  SAContentLeftBodyRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  SAContentLeftBodyAvatar: {
    width: 28,
    height: 28,
    marginRight: 12,
  },
  SAContentLeftBodyText: {
    width: 84,
    height: 28,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: '#666666',
  },
  SAContentRight: {
    flex: 1,
  },
});

const renderHeader = () => {
  return (
    <View style={styles.header}>
      <Link to={{screen: 'Statistics'}}>
        <Image
          style={styles.headerImage}
          source={require('./images/head-statistics.jpg')}
        />
      </Link>
      <Link to={{screen: 'Roster'}}>
        <Image
          style={styles.headerImage}
          source={require('./images/head-roster.jpg')}
        />
      </Link>
    </View>
  );
};
const renderSeasonAverageItem = (index = 0) => {
  const data = [
    [
      {title: '117.2', desc: 'PTS'},
      {title: '.482', desc: 'FG%'},
      {title: '.346', desc: '3PT%'},
      {title: '.775', desc: 'FT%'},
    ],
    [
      {title: '45.7', desc: 'REB'},
      {title: '25.3', desc: 'AST'},
      {title: '6.4', desc: 'STL'},
      {title: '4.6', desc: 'BLK'},
    ],
  ];
  const renderItems = () => {
    return data[index].map(({title, desc}, _index) => {
      return (
        <View key={_index} style={styles.SARowItem}>
          <Text style={styles.SARowTitle}>{title}</Text>
          <Text style={styles.SARowDesc}>{desc}</Text>
        </View>
      );
    });
  };
  return (
    <>
      <View style={styles.SARow}>{renderItems()}</View>
    </>
  );
};
const renderSeasonAverages = () => {
  return (
    <View style={styles.SA}>
      <View style={styles.SATitleRow}>
        <Text style={styles.SATitle}>Season Averages</Text>
        <Text style={styles.SADesc}>Per Game</Text>
      </View>
      <View style={styles.SARow}>{renderSeasonAverageItem(0)}</View>
      <View style={styles.SARow}>{renderSeasonAverageItem(1)}</View>
    </View>
  );
};
const renderTeamLeader = () => {
  const data = Array(5)
    .fill(1)
    .map((_, index) => {
      return (
        <Image
          key={index}
          style={styles.teamLeaderItem}
          source={require('./images/team-leader.jpg')}
        />
      );
    });
  return <ScrollView horizontal>{data}</ScrollView>;
};
const renderTeamLeaders = () => {
  return (
    <View style={styles.SA}>
      <View style={styles.SATitleRow}>
        <Text style={styles.SATitle}>Team Leaders</Text>
      </View>
      <View style={styles.SARow}>{renderTeamLeader()}</View>
    </View>
  );
};
const renderStandingsLeftContent = () => {
  return [
    'Clippers',
    'Grizzlies',
    'Lakers',
    'Kings',
    'Warriors',
    'Clippers',
    'Grizzlies',
    'Lakers',
    'Kings',
    'Warriors',
  ].map((text, textIndex) => {
    return (
      <View key={textIndex} style={styles.SAContentLeftBodyRow}>
        <Image
          style={styles.SAContentLeftBodyAvatar}
          source={require('./images/avatar.jpg')}
        />
        <Text style={styles.SAContentLeftBodyText}>{text}</Text>
      </View>
    );
  });
};
const renderStandings = () => {
  return (
    <>
      <View style={styles.SA}>
        <Text style={styles.SATitle}>Standings</Text>
      </View>
      <View style={styles.SAContent}>
        <View style={styles.SAContentLeft}>
          <Text style={styles.SAContentLeftTitle}>PACIFIC DIVISION</Text>
          <View style={styles.SAContentLeftBody}>
            {renderStandingsLeftContent()}
          </View>
        </View>
        <View style={styles.SAContentRight}>
          <ScrollView horizontal>
            <Table />
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default () => {
  return (
    <>
      <Text style={styles.title}>Team</Text>
      {renderHeader()}
      {renderSeasonAverages()}
      {renderTeamLeaders()}
      {renderStandings()}
    </>
  );
};
