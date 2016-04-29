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

  render() {
    return (
      <ListView style={styles.listView}
        dataSource={
          this.ds.cloneWithRows([
            {title: "Note 1", body: "Body 1", id: 1},
            {title: "Note 2", body: "Body 2", id: 2}
          ])
        }
        renderRow={(rowData) => {
          return (
            <TouchableHighlight style={styles.listLine}
              onPress={() => console.log(rowData)}>
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













































