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
} from 'react-native-paper';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class QuestionScreen extends React.Component {

  constructor() {
    super();
    this.state = { 
      question: '',
      option1: '',
      option2: '',
      option3: '',
      option4: ''
     };
  }
  static navigationOptions = {
    title: 'Question',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>         
          
          <TextInput
            label='Question'
            value={this.state.question}
            onChangeText={text => this.setState({ question:text })}
          />
          <HelperText
            type="info"
          >
            Upto 4 options can be added
        </HelperText>

          <TextInput
            label='Option 1'
            value={this.state.option1}
            onChangeText={text => this.setState({ option1:text })}
          />

           <TextInput
            label='Option 2'
            value={this.state.option2}
            onChangeText={text => this.setState({ option2:text })}
          />

           <TextInput
            label='Option 3'
            value={this.state.option3}
            onChangeText={text => this.setState({ option3:text })}
          />

          <TextInput
            label='Option 4'
            value={this.state.option4}
            onChangeText={text => this.setState({ option4:text })}
          />
          
          <Button icon="save" mode="contained" onPress={() => console.log('Pressed')}>
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
