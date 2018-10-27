import React from 'react';
import { Text } from 'react-native';

export default class MessagesList extends React.Component {

  static navigationOptions = {
    title: 'Stack'
  }

  constructor(props) {
    super(props);
    this.state = { navigation: this.props.navigation }
  }

  render() {
    return this.props.conversations.map((conversation, index) => {
      return <Text onPress={()=> this.openMessage(conversation)} style={{fontWeight: 'bold'}}>{conversation.name}</Text>
    })
  }

  openMessage(conversation) {
    this.props.navigation.navigate('MessageScreen', { conversation: conversation})
  }
}