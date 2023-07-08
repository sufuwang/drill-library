import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Header from '../../component/Header';
import _ForYou from '../../component/ForYou';
import _Team from '../../component/Team';

const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  container: {
    backgroundColor: 'white',
    marginBottom: 34,
  },
});
const ForYou: any = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <ScrollView>
          <_ForYou />
        </ScrollView>
      </Header>
    </SafeAreaView>
  );
};
const Team: any = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <_Team />
      </ScrollView>
    </SafeAreaView>
  );
};

type Menus = Array<{
  name: string;
  icon: React.JSX.Element;
  focusedIcon?: React.JSX.Element;
  component: React.ComponentType;
}>;

const menus: Menus = [
  {
    name: 'For You',
    icon: <Image style={styles.icon} source={require('./images/forYou.jpg')} />,
    focusedIcon: (
      <Image style={styles.icon} source={require('./images/forYou-f.jpg')} />
    ),
    component: ForYou,
    // component: Team,
  },
  {
    name: 'Schedule',
    icon: (
      <Image style={styles.icon} source={require('./images/schedule.jpg')} />
    ),
    focusedIcon: (
      <Image style={styles.icon} source={require('./images/schedule-f.jpg')} />
    ),
    component: ForYou,
  },
  {
    name: 'Train',
    icon: <Image style={styles.icon} source={require('./images/train.jpg')} />,
    focusedIcon: (
      <Image style={styles.icon} source={require('./images/train-f.jpg')} />
    ),
    component: ForYou,
  },
  {
    name: 'Team',
    icon: <Image style={styles.icon} source={require('./images/team.jpg')} />,
    focusedIcon: (
      <Image style={styles.icon} source={require('./images/team-f.jpg')} />
    ),
    component: Team,
  },
  {
    name: 'More',
    icon: <Image style={styles.icon} source={require('./images/more.jpg')} />,
    focusedIcon: (
      <Image style={styles.icon} source={require('./images/more-f.jpg')} />
    ),
    component: ForYou,
  },
];

const handleTabIcon = (focused: boolean, name: string) => {
  const item = menus.find(({name: _name}) => name === _name);
  if (item?.icon) {
    return focused && item.focusedIcon ? item.focusedIcon : item.icon;
  }
  return <Text>icon</Text>;
};

export default () => {
  const renderTabScreen = () => {
    return menus.map(({name, component}) => {
      return <Tab.Screen key={name} name={name} component={component} />;
    });
  };

  const handleScreenOptions = ({route}: any) => {
    return {
      tabBarIcon: ({focused}: any) => handleTabIcon(focused, route.name),
      tabBarActiveTintColor: '#552583',
      tabBarInactiveTintColor: 'gray',
      header: () => '',
    };
  };

  return (
    <Tab.Navigator screenOptions={handleScreenOptions}>
      {renderTabScreen()}
    </Tab.Navigator>
  );
};
