import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    AsyncStorage
    
} from 'react-native';
import { WebBrowser } from 'expo';
import LoginForm from './LoginForm';
import Header from '../Header';
import { TextInput, Button } from 'react-native-paper';

export default class Login extends React.Component {
    // static navigationOptions = ({ navigation }) => ({
    //     headerTitle: <Header />,
    //     headerStyle: {
    //         backgroundColor: '#ff0066',
    //     },
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //         fontWeight: 'bold',
    //     },


    // })

    static navigationOptions = {
        title: 'Please sign in',
        headerStyle: {
                     backgroundColor: '#ff6600',
                 },
      };

      _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
      };
    render() {
        return (
            <View style={styles.container}>
                <View >
                <TextInput 
                mode="outlined"
                    autoCapitalize="none"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyType="next"
                    placeholder='Email or Mobile Num'
                     />

                <TextInput 
                mode="outlined"
                    returnKeyType="go"
                    ref={(input) => this.passwordInput = input}
                    placeholder='Password'                    
                    secureTextEntry />
                <Button mode="outlined"
                style={styles.buttonContainer}
                onPress={this._signInAsync} >
                    LOGIN
                </Button>
                </View>                
            </View>
        )
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cceeff',
        padding: 20
    },
    
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15,
                
    }
    
});