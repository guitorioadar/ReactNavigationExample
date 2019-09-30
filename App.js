/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 
import React from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import HomeScreen from './src/HomeScreen';
import DetailsScreen from './src/DetailsScreen';
import ProfileScreen from './src/ProfileScreen';
import SettingsScreen from './src/SettingsScreen';
import ModalScreen from './src/Layout/Modal';

const HomeStack = createStackNavigator(
  {
    Home:  HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#98FB98',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);
const SettingsStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Settings: SettingsScreen
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#98FB98',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

const RockStarStack = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Details: {screen: DetailsScreen},
    MyModal: { screen: ModalScreen},
  },
  {
    mode: 'modal',
    headerMode: 'What the hell',
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#98FB98',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      navigationOptions: {
        tabBarLabel: 'Rock Star!',
      },
    },
  }
)

const BottomTabNavigation = createBottomTabNavigator(
  {
    Home : HomeStack,
    Settings: SettingsStack,
    RockStar: RockStarStack
  }
) 

export default createAppContainer(BottomTabNavigation);