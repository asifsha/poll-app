import React from 'react';
import { createSwitchNavigator, createDrawerNavigator,
  createStackNavigator } from 'react-navigation';
import Login from '../screens/Login';
import MainTabNavigator from './MainTabNavigator';
//import Icon from 'react-native-vector-icons/FontAwesome5';
// export default createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
// });


const RootStack= createDrawerNavigator({
  Home: MainTabNavigator,
  Login: {
    screen: Login,
    navigationOptions: {
      drawerLabel: 'Login [admin]',  
      
      headerStyle : {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle : {
        color: 'white',
        },        
    }
  }  
});


const AppStack = createStackNavigator({ RootStack : { screen: RootStack } });

export default AppStack;