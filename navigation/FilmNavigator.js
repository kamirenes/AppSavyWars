
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import FilmDescripScreen from '../screens/FilmDescripScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

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


export default FimlStack;
