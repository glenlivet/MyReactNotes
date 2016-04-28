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
  View
} from 'react-native';

import SimpleButton from './App/Components/SimpleButton';
import HomeScreen from './App/Components/HomeScreen';
import NoteScreen from './App/Components/NoteScreen';

class MyReactNotes extends React.Component {
  constructor (props) {
    super(props);
    StatusBar.setBarStyle('light-content');
  }
  renderScene (route, navigator) {
    switch(route.name) {
      case 'home':
        return (
          <HomeScreen navigator={navigator} />
        );
      case 'createNote':
        return (
          <NoteScreen />
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
            onPress={() => {
              navigator.push({
                name: 'createNote'
              });
            }}
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
          <Text style={styles.navBarButtonText}>Create Note</Text>
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
