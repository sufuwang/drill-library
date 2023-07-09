import React from 'react';
import Table, {Head} from '../../component/Table';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
});

const head: Head = ['#', 'POS', 'NAME', 'MIN', 'PTS', 'AST', 'REB', 'FG%'];
const data = Array(10).fill([
  '12',
  'C',
  'M.Bamba',
  '10.9',
  '4.1',
  '0.5',
  '5.0',
  '40.7',
]);

export default () => {
  return (
    <View style={styles.container}>
      <Table head={head} data={data} />
    </View>
  );
};
