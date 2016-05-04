/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  StatusBar,
  View,
  AsyncStorage
} from 'react-native';

import _ from 'underscore';

import SimpleButton from './App/Components/SimpleButton';
import HomeScreen from './App/Components/HomeScreen';
import NoteScreen from './App/Components/NoteScreen';

class MyReactNotes extends React.Component {
  constructor (props) {
    super(props);
    StatusBar.setBarStyle('light-content');
    this.state = {
      selectedNote: {title: "", body: ""},
      notes: {
        1: {title: "Note 1", body: "body", id: 1},
        2: {title: "Note 2", body: "body", id: 2}
      }
    };
    this.renderScene = this.renderScene.bind(this);
  }

  updateNote(note) {
    var newNotes = Object.assign({}, this.state.notes);
    newNotes[note.id] = note;
    this.setState({notes: newNotes});
  }

  renderScene (route, navigator) {
    switch(route.name) {
      case 'home':
        return (
          <HomeScreen navigator={navigator} onCreateButtonClick={MyReactNotes.transitionToCreate}
            notes={_(this.state.notes).toArray()} 
            onSelectNote={(note) => navigator.push({name: "createNote", note: note})}/>
        );
      case 'createNote':
        return (
          <NoteScreen note={route.note} navigator={navigator}
            onChangeNote={(note) => this.updateNote(note)}/>
        );
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{name: 'home'}}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />
        }
      />
    );
  }

  static transitionToCreate (navigator) {
    navigator.push({
      name: 'createNote',
      note: {
        id: new Date().getTime(),
        title: '',
        body: ''
      }
    });
  }
}


var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState){
    switch (route.name) {
      case 'createNote':
        return (
          <SimpleButton 
            onPress={() => navigator.pop()}
            customText='Back'
            style={styles.navBarLeftButton}
            textStyle={styles.navBarButtonText}
          />
        );
      default:
        return null;
    }
  },

  RightButton: function(route, navigator, index, navState) {
    switch (route.name) {
      case 'home':
        return (
          <SimpleButton
            onPress={() => MyReactNotes.transitionToCreate(navigator)}
            customText='Create Note'
            style={styles.navBarRightButton}
            textStyle={styles.navBarButtonText}
          />
        );
      default: 
        return null;
    }
  },

  Title: function(route, navigator, index, navState) {
    switch (route.name) {
      case 'home':
        return (
          <Text style={styles.navBarButtonText}>React Notes</Text>
        );
      case 'createNote':
        return (
          <Text style={styles.navBarButtonText}>{route.note ? route.note.title : 'Create Note'}</Text>
        );
    }
  }
};

const styles = StyleSheet.create({
  navContainer: {
    flex: 1
  },
  navBar: {
    backgroundColor: '#5B29C1',
    borderBottomColor: '#48209A',
    borderBottomWidth: 1
  },
  navBarTitleText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '500',
      marginVertical: 9  // iOS
   // marginVertical: 16 // Android
    },
    navBarLeftButton: {
      paddingLeft: 10
    },
    navBarRightButton: {
      paddingRight: 10
    },
    navBarButtonText: {
      color: '#EEE',
      fontSize: 16,
      marginVertical: 10 // iOS
   // marginVertical: 16 // Android
    }
});

AppRegistry.registerComponent('MyReactNotes', () => MyReactNotes);
