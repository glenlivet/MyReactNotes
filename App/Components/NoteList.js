import React, {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

export default class NoteList extends React.Component {
  
  constructor (props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }

  _onPress(rowData) {
    this.props.navigator.push({
      name: 'createNote',
      note: {
        id: rowData.id,
        title: rowData.title,
        body: rowData.body
      }
    });
  }

  render() {
    return (
      <ListView style={styles.listView}
        dataSource={
          this.ds.cloneWithRows(this.props.notes)
        }
        renderRow={(rowData) => {
          return (
            <TouchableHighlight style={styles.listLine}
              onPress={() => this.props.onSelectNote(rowData)}
              underlayColor="#9E7CE3">
              <Text style={styles.textLine}>{rowData.title}</Text>
            </TouchableHighlight>
          )
        }}
      />
    )
  }
}


var styles = StyleSheet.create({
  listLine: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: '#9E7CE3',
    borderBottomWidth: 1,
  },
  textLine: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  listView: {
    alignSelf: 'stretch',
    backgroundColor: '#F5FCFF'
  }
});













































