import React from 'react';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({});

interface HeadItem {
  title: string;
  width: number;
}

export default ({
  head,
  data,
}: {
  head: Array<HeadItem>;
  data: Array<Array<string>>;
}) => {
  const renderHead = () => {
    return head.map(({title, width}) => {
      return (
        <View>
          <Text></Text>
        </View>
      );
    });
  };
  const renderBody = () => {};

  return (
    <>
      {renderHead()}
      {renderBody()}
    </>
  );
};
