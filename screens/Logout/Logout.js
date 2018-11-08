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
import Header from '../Header';

export default class Logout extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: <Header  />

})

    render() {
        return (
            <View style={styles.container}>
              <Text>Logout</Text>
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