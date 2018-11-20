import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import PollScreen from '../screens/PollScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import QuestionScreen from '../screens/QuestionScreen';

import MyPollScreen from '../screens/MyPollScreen';
import AnswerScreen from '../screens/AnswerScreen';


const PollStack = createStackNavigator({
  Home: PollScreen,
  Question:QuestionScreen
});

PollStack.navigationOptions = {
  tabBarLabel: 'Polls',
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

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

// export default createBottomTabNavigator({
//   PollStack,
//   LinksStack,
//   SettingsStack,
// });


const UserPollStack = createStackNavigator({
  Home: MyPollScreen 
});


UserPollStack.navigationOptions = {
  tabBarLabel: 'My Polls',
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

const AnswerStack = createStackNavigator({
  Answer:AnswerScreen
});

AnswerStack.navigationOptions = {
  tabBarLabel: 'Answers',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

export default createBottomTabNavigator({
  UserPollStack,
  AnswerStack  
});



