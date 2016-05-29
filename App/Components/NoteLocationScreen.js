import React, {
  View,
  Text,
  MapView,
  StyleSheet
} from 'react-native';

import _ from 'underscore';

export default class NoteLocationScreen extends React.Component {
  render () {
    var locations = _.values(this.props.notes).map((note) => {
      return {
        latitude: note.location.coords.latitude,
        longitude: note.location.coords.longitude,
        // leftCalloutView: (
        //   <View>
        //     <Text>{note.title}</Text>
        //   </View>
        // ),
        hasLeftCallout: true,
        onLeftCalloutPress: this.props.onSelectNote.bind(this, note),
        title: note.title
      };
    });
    return (
      <MapView
        annotations={locations}
        showsUserLocation={true}
        followUserLocation={true}
        style={styles.map}
      />
    );
  }
}

var styles = StyleSheet.create({
  map: {
    flex: 1,
    marginTop: 64
  }
});
