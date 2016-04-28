
import React, {
  StyleSheet,
  TextInput,
  Text,
  View
} from 'react-native';

export default class NoteScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
      <View style={styles.inputContainer}>
          <TextInput 
            placeholder="Untitled" 
            ref="title" 
            autoFocus={true}
            autoCapitalize="sentences"
            style={[styles.textInput, styles.title]} 
            onEndEditing={(text)=>{this.refs.body.focus()}}
          />
          </View>
        <View style={[styles.inputContainer, styles.body]}>
          <TextInput 
            ref="body" 
            multiline={true} 
            placeholder="Start typing..." 
            style={[styles.textInput, styles.body]} 
          />
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 64,
    marginHorizontal: 20
  },
  title: {
    height: 40
  },
  body: {
    flex: 1
  },
  textInput: {
    flex: 1,
    fontSize: 16
  },
  inputContainer: {
    alignSelf: 'stretch',
    borderBottomColor: '#9E7CE3',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginBottom: 10
  }
});
