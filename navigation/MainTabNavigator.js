import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import EspeciesScreen from '../screens/EspeciesScreen';
import FilmDescripScreen from '../screens/FilmDescripScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const EspeciesStack = createStackNavigator(
  {
    Links: EspeciesScreen,
  },
  config
);

EspeciesStack.navigationOptions = {
  tabBarLabel: 'Especies',
  
};

EspeciesStack.path = '';

const FimlStack = createStackNavigator(
  {
    FimlStack: FilmDescripScreen ,
  },
  config
);

FimlStack.navigationOptions = {
  tabBarLabel: 'Ver más',
  
};

FimlStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  EspeciesStack,
  FimlStack,
});

tabNavigator.path = '';

export default tabNavigator;
