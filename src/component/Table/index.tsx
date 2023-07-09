import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#d9d9d9',
  },
  headerItem: {
    width: 100,
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'League Gothic',
    textAlign: 'center',
  },
  bodyRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10,
  },
  bodyRowItem: {
    fontFamily: 'TT Commons',
    fontSize: 14,
    color: '#666666',
    width: 100,
    textAlign: 'center',
  },
});

export type Head = Array<string>;

export default ({head, data}: {head: Head; data: Array<Array<string>>}) => {
  const renderHead = () => {
    return head.map(title => {
      return (
        <Text key={title} style={styles.headerItem}>
          {title}
        </Text>
      );
    });
  };
  const renderBody = () => {
    return data.map((row, rowIndex) => (
      <View key={rowIndex} style={styles.bodyRow}>
        {row.map((text, textIndex) => (
          <Text key={textIndex} style={styles.bodyRowItem}>
            {text}
          </Text>
        ))}
      </View>
    ));
  };

  return (
    <>
      <View style={styles.header}>{renderHead()}</View>
      {renderBody()}
    </>
  );
};
