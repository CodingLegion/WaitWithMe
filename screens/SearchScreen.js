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

import Radar from '../components/Radar';
import Wallpaper from './Wallpaper';
import { NavigationActions } from 'react-navigation';

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
    work:"University Of Manchester in Manchester in the United Kingdom"
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
  },
  {
    id: "5",
    name: "Adam",
    topics: ["sport", "music"],
    work: "University Of Manchester"
  },
  {
    id: "6",
    name: "Maciej",
    topics: ["IT"],
    work:"University Of Manchester"
  },
  {
    id: "7",
    name: "Grzegorz",
    topics: ["sport", "music"],
    work: "University Of Manchester"
  },
  {
    id: "8",
    name: "Ada",
    topics: ["sport", "music"],
    work: "University Of Manchester"
  }
];

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };

  constructor(props) {
    super(props);
    this.state = {coordinates: null, selected: null, users: null, isLoading: true}
  }

  componentDidMount() {
    this.getCoordinates();
    setTimeout(() => {
      this.setState({
        isLoading: false,
        users: mockedUsers,
      })
    },  1000)
  }

  getCoordinates = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      const coordinates = pos.coords;
      this.setState({ coordinates });

      console.log('Your current position is:');
      console.log(`Latitude : ${coordinates.latitude}`);
      console.log(`Longitude: ${coordinates.longitude}`);
      console.log(`More or less ${coordinates.accuracy} meters.`);
    }, err => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    })
  }

  onPress = (user) => {
    this.setState(previousState => {
      return { selected: previousState.selected === user ? null : user };
    });
  }

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
        }}>
          <Wallpaper>
            <Radar />
            {!this.state.isLoading && (
              <FlatList
                ItemSeparatorComponent={Platform.OS !== 'android' && (({highlighted}) => (
                  <View style={[styles.separator, highlighted && styles.listItemHighlighted]} />
                ))}
                data={this.state.users && this.state.users.map(user => ({ key: `user-${user.id}`, ...user }))}
                renderItem={({item, separators}) => {
                  const { id, name, topics, work } = item;
                  return (
                    <TouchableHighlight
                      underlayColor='#b967ff'
                      onPress={() => this.onPress(id)}
                      onShowUnderlay={separators.highlight}
                      onHideUnderlay={separators.unhighlight}>
                      <View>
                        <Text style={styles.listItem}>{name}</Text>
                        {this.state.selected === id && (<View style={styles.listItemDetails}>
                          <Text style={styles.lineItemDescription}>
                            {`Occupy: ${work}\nInterested in: ${topics}`}
                          </Text>
                          <Icon
                            style={styles.lineItemButton}
                            raised
                            name='comments'
                            type='font-awesome'
                            onPress={()=> {
                              console.log('ok');
                              // this.navigateToScreen('Chat')
                              this.props.navigation.navigate('Chat');
                            }} />
                        </View>)}
                      </View>
                    </TouchableHighlight>
                )}}
                />)
              }
            </Wallpaper>
        </ScrollView>
    );
  }
//   navigateToScreen = (route) => {
//     const navigationAction = NavigationActions.navigate({
//         routeName: route
//     })
//     this.props.navigation.dispatch(navigationAction)
// }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: 'white',
    marginLeft: '10%',
    lineHeight: 40
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
