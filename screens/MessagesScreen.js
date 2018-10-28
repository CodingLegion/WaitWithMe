import React from 'react';
import MessagesList from '../components/MessagesList'
import Wallpaper from './Wallpaper';
import {StyleSheet, View} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export default class MessagesScreen extends React.Component {
  static navigationOptions = {
    title: 'Messages',
  };

  state = {
    conversations: [],
  }

  componentWillMount() {
    this.setState({
      conversations: [
        {
          _id: 1,
          name: 'Tom',
          avatar: 'https://placeimg.com/140/140/any?1',
        },
        {
          _id: 2,
          name: 'Angel',
          avatar: 'https://placeimg.com/140/140/any?1',
        },
        {
          _id: 3,
          name: 'John',
          avatar: 'https://placeimg.com/140/140/any?1',
        },
        {
          _id: 4,
          name: 'Adam',
          avatar: 'https://placeimg.com/140/140/any?1',
        },
        {
          _id: 5,
          name: 'Ola',
          avatar: 'https://placeimg.com/140/140/any?1',
        },
        {
          _id: 6,
          name: 'Gary',
          avatar: 'https://placeimg.com/140/140/any?1',
        },
        {
          _id: 7,
          name: 'Alex',
          avatar: 'https://placeimg.com/140/140/any?1',
        },
        {
          _id: 8,
          name: 'Sonia',
          avatar: 'https://placeimg.com/140/140/any?1',
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (<Wallpaper>
      <View style={styles.container}>
        <MessagesList navigation={this.props.navigation} conversations={this.state.conversations} />
      </View>
      </Wallpaper>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  }
});