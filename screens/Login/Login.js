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

export default class Login extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Login [admin]",
        headerLeft: (
            <TouchableOpacity
                style={Styles.headerButton}
                onPress={() => navigation.openDrawer()}>
                <Icon name="bars" size={20} />
            </TouchableOpacity>
        ),

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
    }
});