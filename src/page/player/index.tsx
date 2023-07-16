import React from 'react';
import {Image, ScrollView, StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-ui-lib';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eaebee',
  },
  banner: {
    width: '100%',
    height: 350,
  },
  menuRow: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#eaebec',
    backgroundColor: '#fff',
  },
  menuItem: {
    padding: 16,
  },
  menuFocusedItem: {
    padding: 16,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  menuText: {
    fontSize: 16,
  },
  menuFocusedText: {
    fontSize: 16,
    fontWeight: '600',
  },
  card: {
    borderRadius: 4,
    marginTop: 8,
    marginBottom: 4,
    paddingLeft: 10,
    paddingTop: 14,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  cardTitle: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eaebec',
    marginBottom: 7,
  },
  cardText: {
    fontWeight: '600',
    fontSize: 18,
  },
  cardRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 7,
    paddingBottom: 7,
  },
  cardRowImage: {
    width: 36,
    height: 36,
    marginRight: 12,
  },
  cardRowTitle: {
    fontWeight: '400',
    fontSize: 18,
  },
  cardRowDesc: {
    fontSize: 12,
    color: '#a5a6a7',
  },
  body: {
    borderRadius: 4,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingRight: 28,
    paddingLeft: 28,
  },
  bodyHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bodyHeaderLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bodyHeaderLeftCount: {
    fontWeight: '600',
    fontSize: 34,
    marginRight: 18,
  },
  bodyHeaderLeftText: {
    display: 'flex',
    flexDirection: 'column',
  },
  bodyHeaderLeftTitle: {
    fontWeight: '600',
    fontSize: 24,
  },
  bodyHeaderLeftDesc: {
    color: '#666',
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
  ss: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#aaa',
    overflow: 'hidden',
    paddingBottom: 8,
    marginBottom: 20,
  },
  ssTitle: {
    backgroundColor: '#e7e9f0',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
  },
});

export default () => {
  const renderMenu = () => {
    return ['Overview', 'Highlights', 'Stats'].map(text => (
      <View
        key={text}
        style={text === 'Overview' ? styles.menuFocusedItem : styles.menuItem}>
        <Text
          style={
            text === 'Overview' ? styles.menuFocusedText : styles.menuText
          }>
          {text}
        </Text>
      </View>
    ));
  };
  const renderCardItem = (key: number) => {
    return (
      <View key={key} style={styles.cardRow}>
        <Image
          style={styles.cardRowImage}
          source={require('./images/avatar.jpg')}
        />
        <View>
          <Text style={styles.cardRowTitle}>Los Angeles Lakers</Text>
          <Text style={styles.cardRowDesc}>2018-CURRENT(5 SEASONS)</Text>
        </View>
      </View>
    );
  };
  const renderContainer = (count: number) => {
    return Array(count)
      .fill(0)
      .map((_, key) => renderCardItem(key));
  };
  const renderCard = (count: number) => {
    return (
      <View style={styles.card}>
        <View style={styles.cardTitle}>
          <Text style={styles.cardText}>Career History</Text>
        </View>
        {renderContainer(count)}
      </View>
    );
  };
  const renderSeasonAverageItem = (index = 0) => {
    const data = [
      [
        {title: '117.2', desc: 'PTS'},
        {title: '.482', desc: 'FG%'},
        {title: '.346', desc: '3PT%'},
      ],
      [
        {title: '45.7', desc: 'REB'},
        {title: '6.4', desc: 'STL'},
        {title: '4.6', desc: 'BLK'},
      ],
    ];
    const renderItems = () => {
      return data[index].map(({title, desc}, _index) => {
        return (
          <View key={_index} style={styles.SARowItem}>
            <Text style={styles.SARowDesc}>{desc}</Text>
            <Text style={styles.SARowTitle}>{title}</Text>
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
        <View style={styles.SARow}>{renderSeasonAverageItem(0)}</View>
        <View style={styles.SARow}>{renderSeasonAverageItem(1)}</View>
      </View>
    );
  };
  const renderSeasonStats = () => {
    return (
      <View style={styles.ss}>
        <Text style={styles.ssTitle}>2022 - 2023 SEASON STATS</Text>
        <View>{renderSeasonAverageItem(1)}</View>
      </View>
    );
  };
  const renderBody = () => {
    return (
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <View style={styles.bodyHeaderLeft}>
            <Text style={styles.bodyHeaderLeftCount}>6</Text>
            <View style={styles.bodyHeaderLeftText}>
              <Text style={styles.bodyHeaderLeftTitle}>Lebron James</Text>
              <Text style={styles.bodyHeaderLeftDesc}>Forward</Text>
            </View>
          </View>
          <Button
            label="Follow"
            backgroundColor="white"
            color="black"
            outline
            outlineColor="black"
            borderRadius={30}
            outlineWidth={2}
          />
        </View>
        {renderSeasonAverages()}
        {renderSeasonStats()}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={styles.banner} source={require('./images/banner.jpg')} />
        <View style={styles.menuRow}>{renderMenu()}</View>
        {renderBody()}
        {renderCard(3)}
        {renderCard(10)}
      </ScrollView>
    </View>
  );
};
