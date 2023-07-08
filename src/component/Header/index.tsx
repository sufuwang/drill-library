import React, {useState} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingLeft: 14,
    paddingRight: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom: 14,
  },
  icon: {
    width: 51,
    height: 17,
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 16,
    fontFamily: 'TT Commons',
    justifyContent: 'space-around',
  },
  search: {
    width: 20,
    height: 20,
  },
  text: {
    paddingLeft: 12,
    paddingRight: 12,
  },
  focusedText: {
    paddingLeft: 12,
    paddingRight: 12,
    fontWeight: '700',
  },
});

export const menuContext = React.createContext('currentMenuOfForYou');

const menus = ['Home', 'Article', 'Photo', 'Video'];
export default ({children}: any) => {
  const [curMenu, setCurMenu] = useState(menus[0]);
  const handlePressMenu = (menu: (typeof menus)[number]) => {
    setCurMenu(menu);
  };
  const renderMenus = () => {
    return menus.map(menu => (
      <Text
        key={menu}
        style={curMenu === menu ? styles.focusedText : styles.text}
        onPress={() => handlePressMenu(menu)}>
        {menu}
      </Text>
    ));
  };
  return (
    <>
      <View style={styles.header}>
        <View style={styles.menu}>{renderMenus()}</View>
        <Image style={styles.search} source={require('./search.jpg')} />
      </View>
      <menuContext.Provider value={curMenu}>{children}</menuContext.Provider>
    </>
  );
};
