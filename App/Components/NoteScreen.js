
import React, {
  StyleSheet,
  TextInput,
  View
} from 'react-native';

export default class NoteScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <TextInput placeholder="Untitled" ref="title" autoFocus={true}
          style={styles.title} onEndEditing={(text)=>{this.refs.body.focus()}}/>
        <TextInput ref="body" multiline={true} placeholder="Start typing..." style={styles.body} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 64
  },
  title: {
    height: 40
  },
  body: {
    flex: 1
  }
});
