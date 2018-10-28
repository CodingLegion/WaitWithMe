import { GiftedChat } from 'react-native-gifted-chat';
import React from 'react';

export default class MessageScreen extends React.Component {
  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Sebastian Virlan',
            avatar: 'https://avatars3.githubusercontent.com/u/14075059?s=460&v=4',
          },
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
    return (
      <GiftedChat
      messages={this.state.messages}
      onSend={messages => this.onSend(messages)}
      user={{
        _id: 1,
      }}
    />
    )
  }
}