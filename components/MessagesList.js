import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Platform
} from 'react-native';
import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default class MessagesList extends React.Component {
  static navigationOptions = {
    title: 'Messages',
  };

  onPress = (user) => {
    this.props.navigation.navigate('Chat');
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          ItemSeparatorComponent={Platform.OS !== 'android' && (({highlighted}) => (
            <View style={[styles.separator, highlighted && styles.listItemHighlighted]} />
          ))}
          data={this.props.conversations.map(user => ({ key: `user-${user._id}`, ...user }))}
          renderItem={({item, separators}) => {
            const { id, name } = item;
            return (
              <TouchableHighlight
                underlayColor='#b967ff'
                onPress={() => this.onPress(id)}
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}>
                <View>
                  <Text style={styles.listItem}>{name}</Text>
                </View>
              </TouchableHighlight>
          )}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    width: DEVICE_WIDTH
  },
  separator: {
    backgroundColor: 'lightgray',
    marginLeft: '8%',
    marginRight: '8%',
    height: 1
  },
  listItem: {
    fontSize: 20,
    color: 'white',
    marginLeft: '10%',
    lineHeight: 60
  },
  listItemDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '10%',
    marginRight: '10%',
  },
  lineItemDescription: {
    flex: 3,
    color: 'white',
  },
  lineItemButton: {
    flex: 1,
  },
  listItemHighlighted: {
    marginLeft: 0,
    marginRight: 0,
  }
});
