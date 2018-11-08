import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { WebBrowser } from 'expo';
import LoginForm from './LoginForm';
import Header from '../Header';

export default class Login extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: <Header />,
        headerStyle: {
            backgroundColor: '#ff0066',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },


    })

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginContainer}>
                    <Text>no bg</Text>
                </View>

                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </View>
        )
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },
    headerButton: {
        backgroundColor: '#2c3e50',
    }
});