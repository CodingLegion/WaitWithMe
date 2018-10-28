import React from 'react';
import { Text } from 'react-native';
import Actions from 'react-native-router-flux';

export default class MessagesList extends React.Component {

  render() {
    return this.props.conversations.map((conversation, index) => {
      return <Text key={index} onPress={()=> Actions.messageScreen()} style={{fontWeight: 'bold'}}>{conversation.name}</Text>
    })
  }
}