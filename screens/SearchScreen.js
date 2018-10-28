import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Platform
} from 'react-native';
import { Icon } from 'react-native-elements'

const mockedUsers = [
  {
    id: "1",
    name: "John",
    topics: ["sport", "music"],
    work: "University Of Manchester"
  },
  {
    id: "2",
    name: "Jaden",
    topics: ["IT"],
    work:"University Of Manchester"
  },
  {
    id: "3",
    name: "Devin",
    topics: ["sport", "music"],
    work: "University Of Manchester"
  },
  {
    id: "4",
    name: "Alex",
    topics: ["IT"],
    work:"University Of Manchester"
  }
];

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };

  constructor(props) {
    super(props);
    this.state = {selected: null, users: null, isLoading: true}
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
        users: mockedUsers,
      })
    },  1000)
  }

  onPress = (user) => {
    this.setState(previousState => {
      return { selected: previousState.selected === user ? null : user };
    });
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <ScrollView style={styles.container}>
        <FlatList
          ItemSeparatorComponent={Platform.OS !== 'android' && (({highlighted}) => (
            <View style={[styles.separator, highlighted && styles.listItemHighlighted]} />
          ))}
          data={this.state.users && this.state.users.map(user => ({ key: `user-${user.id}`, ...user }))}
          renderItem={({item, separators}) => {
            const { id, name, topics, work } = item;

            return (
              <TouchableHighlight
                onPress={() => this.onPress(id)}
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}>
                <View style={{backgroundColor: 'white'}}>
                  <Text style={styles.listItem}>{name}</Text>
                  {this.state.selected === id && (<View style={styles.listItemDetails}>
                    <Text style={styles.lineItemDescription}>
                      {`Occupy: ${work}\nInterested in: ${topics}`}
                    </Text>
                    <Icon
                      raised
                      name='comments'
                      type='font-awesome'
                      onPress={() => console.log('hello')} />
                  </View>)}
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
    fontSize: 20,
    marginLeft: '10%',
    lineHeight: 40
  },
  lineItemDescription: {
  },
  listItemDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '10%',
  },
  listItemHighlighted: {
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: 'gray'
  }
});
