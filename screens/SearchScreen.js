import React from 'react';
import {
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Platform
} from 'react-native';

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };

  constructor(props) {
    super(props);
    this.users = [
      {id: 1, name: 'Devin', description: 'bla bla bldfasdsfaah'},
      {id: 2, name: 'Jackson', description: 'bla afdsabla blah'},
      {id: 3, name: 'James', description: 'bla fadsafsd blah'},
      {id: 4, name: 'Joel', description: 'blafffff bla blah'},
      {id: 5, name: 'John', description: 'bfdsafdasla bla blah'},
      {id: 6, name: 'Jillian', description: 'bla blasdfa blah'},
      {id: 7, name: 'Jimmy', description: 'blasdfasda bla blah'},
      {id: 8, name: 'Julie', description: 'blasdfasda bla blah'}
    ];
  }

  onPress = (user) => {
    this.setState({ selected: user });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <FlatList
          ItemSeparatorComponent={Platform.OS !== 'android' && (({highlighted}) => (
            <View style={[styles.separator, highlighted && styles.listItemHighlighted]} />
          ))}
          data={this.users.map(user => ({ key: `user-${user.id}`, ...user }))}
          renderItem={({item, separators}) => {
            const { id, name } = item;

            return (
              <TouchableHighlight
                onPress={() => this.onPress(id)}
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}>
                <View style={{backgroundColor: 'white'}}>
                  <Text style={styles.listItem}>{name}</Text>
                  {/* {this.state.selected === id && ( */}
                    {/* <Text>{description}</Text> */}
                  {/* )} */}
                </View>
              </TouchableHighlight>
          )}}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  separator: {
    backgroundColor: 'lightgray',
    marginLeft: '8%',
    marginRight: '8%',
    height: 1
  },
  listItem: {
    width: '100%',
    fontSize: 20,
    marginLeft: '10%',
    lineHeight: 40
  },
  listItemHighlighted: {
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: 'gray'
  }
});
