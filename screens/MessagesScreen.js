import { GiftedChat } from 'react-native-gifted-chat';
import React from 'react';
import MessagesList from '../components/MessagesList'
import Wallpaper from './Wallpaper';
import {StyleSheet, View} from 'react-native';

export default class MessagesScreen extends React.Component {
  state = {
    conversations: [],
  }

  componentWillMount() {
    this.setState({
      conversations: [
        {
          _id: 1,
          name: 'Dawid Jaskot',
          avatar: 'https://avatars3.githubusercontent.com/u/2753817?s=460&v=4',
        },
        {
          _id: 2,
          name: 'Angel Petrov',
          avatar: 'https://avatars0.githubusercontent.com/u/5655514?s=460&v=4',
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
        <MessagesList conversations={this.state.conversations} />
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