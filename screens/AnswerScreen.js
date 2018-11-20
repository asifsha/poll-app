import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Chip,
} from 'react-native';

import {
  TextInput,
  Subheading,
  Headline,
  HelperText,
  Button,
  RadioButton 
} from 'react-native-paper';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class AnswerScreen extends React.Component {

  constructor() {
    super();
    this.state = { 
      question: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      optionSeleceted:-1
      
     };
  }
  static navigationOptions = {
    title: 'Answer',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>         
          
          <Text>
            {this.state.question}            
          </Text> 

          <RadioButton
          value={this.state.option1}          
          onPress={() => { this.setState({ optionSeleceted: 1 }); }}
        />

        <RadioButton
          value={this.state.option2}          
          onPress={() => { this.setState({ optionSeleceted: 2 }); }}
        />         

           <RadioButton
          value={this.state.option3}          
          onPress={() => { this.setState({ optionSeleceted: 3 }); }}
        />

          <RadioButton
          value={this.state.option4}          
          onPress={() => { this.setState({ optionSeleceted: 4 }); }}
        />
                     
          <Button icon="poll" mode="contained" onPress={() => console.log('Pressed')}>
            Save
          </Button>                
        </ScrollView>
      </View>
    );
  }   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },  
  contentContainer: {
    padding: 10,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
