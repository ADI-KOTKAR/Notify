import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Text} from 'native-base';

export default class CustomDomain extends Component {
  render() {
    return (
      <Container>
        <Header style={{marginTop:30}}>
          <Left>
            <Button transparent
                onPress={() => { this.props.navigation.goBack() }}
            >
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}