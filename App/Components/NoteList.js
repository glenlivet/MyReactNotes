import React, {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

import Swipeout from 'react-native-swipeout';

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

  getSwipeoutButtons (rowData) {
    let that = this;
    return [
      {
        text: 'Delete',
        type: 'delete',
        onPress: function(){
          that.props.onSwipeDelete(rowData);
        }
      }
    ];
  }

  render() {

    return (
      <ListView style={styles.listView}
        dataSource={
          this.ds.cloneWithRows(this.props.notes)
        }
        renderRow={(rowData) => {
          return (
          <Swipeout autoClose="true" right={this.getSwipeoutButtons.call(this,rowData)} >
            <TouchableHighlight style={styles.listLine}
              onPress={() => this.props.onSelectNote(rowData)}
              underlayColor="#9E7CE3">
                <Text style={styles.textLine}>{rowData.title}</Text>
            </TouchableHighlight>
          </Swipeout>
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
    backgroundColor: 'white',
    padding: 10,
    borderBottomColor: '#9E7CE3',
    borderBottomWidth: 1,
  },
  swipeout: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFFFFF'
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













































