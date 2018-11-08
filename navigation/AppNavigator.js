import React from 'react';
import { View,Text, Image, TouchableHighlight } from 'react-native';
import {
  createSwitchNavigator, createDrawerNavigator,
  createStackNavigator
} from 'react-navigation';
import Login from '../screens/Login';
import Logout from '../screens/Logout';
import MainTabNavigator from './MainTabNavigator';

import { Button } from 'react-native-paper';

import { DrawerNavigator, DrawerItems } from 'react-navigation';

//import Icon from 'react-native-vector-icons/FontAwesome5';
// export default createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
// });


// const RootStack = createDrawerNavigator({
//   Home: Logout,
//   Login: {
//     headerMode: 'float',
//     screen: Login,
//     navigationOptions: {
//       drawerLabel: 'Login [admin]',      
//       drawerIcon: ({ tintColor }) => (
//         <Image
//           source={require("../assets/images/assignment.png")}
//           resizeMode="contain"
//           style={{ width: 20, height: 20, tintColor: tintColor }}
//         />
//       ),    
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         color: 'red',
//       },
//     }
//   }
// });


//const AppStack = createStackNavigator({
//   RootStack:
//   {
//     screen: RootStack,
//     navigationOptions:
//     {
//       title: "Category",
//       headerMode: 'float',
//       header: <Text onPress={() =>
//         navigation.navigate('DrawerOpen')}>Menu</Text>,
//       headerStyle: {
//         backgroundColor: '#f4511e',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         color: 'red',
//       },
//     }
//   }
// });


// const { navigate } = this.props.navigation;
// const AppStack = createStackNavigator(
//   {
//     screen: RootStack    
//   },
//   {
//     initialRouteName: 'screen',
//     /* The header config from HomeScreen is now here */
//     navigationOptions: ({navigation }) => ( {         
//       headerLeft: ({ tintColor }) => (
//       <TouchableHighlight onPress={() => navigate.navigate('DrawerOpen')}>
//        <Image
//       source={require("../assets/images/assignment.png")}
//       resizeMode="contain"
//       style={{ width: 30, height: 30, tintColor: tintColor }}
//       onPress={() => console.warn('This is a button!')}
//       />
//       </TouchableHighlight>),        
//         headerStyle: {
//           backgroundColor: '#f4511e'
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }),
//   }
// );

const App = createDrawerNavigator({
  Home: Login ,  
  Notifications: MainTabNavigator,
},
{
  initialRouteName: 'Home',
  /* The header config from HomeScreen is now here */ 
}

,{
   contentComponent: (props) => (
      <View>
        <Text>Custom Header</Text>
        <DrawerItems {...props} />
        <Text>Custom Footer</Text>
      </View>
    )
  });

  //working
  // const RootStack = createStackNavigator(
  //   { Home : { screen: App } },
  //   {
  //     initialRouteName: 'Home',
  //     /* The header config from HomeScreen is now here */
  //     navigationOptions: {
  //       headerStyle: {
  //         backgroundColor: '#ff0066',
  //       },
  //       headerTintColor: '#fff',
  //       headerTitleStyle: {
  //         fontWeight: 'bold',
  //       },
  //     },
  //   }
  // );

export default App;