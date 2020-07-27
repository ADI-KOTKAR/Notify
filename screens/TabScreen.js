import React, { Component } from 'react';
import { 
  Container, 
  Header, 
  Left, 
  Body, 
  Right, 
  Title, 
  Content, 
  Thumbnail, 
  ScrollableTab, 
  Tab, 
  Tabs , Button, Text
} from 'native-base';
import { Font, AppLoading } from "expo";
import {Image} from 'react-native'
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
import Tab4 from './tabs/tab4';


export default class TabsExample extends Component {

  render() {
    return (
      <Container>
        <Header hasTabs transparent style={{marginTop:10, marginBottom:10}}>
          <Left>
                  <Thumbnail source={{uri: "https://raw.githubusercontent.com/ADI-KOTKAR/DummyData/master/icons8-light-on-100.png"}} 
                      style={{marginRight:"auto", marginLeft:"auto"}}/>
          </Left>
          <Body>
              <Title style={{color:"#3F51B5", marginLeft:5}}>N O T I F Y</Title>
          </Body>
          <Right>
              <Button rounded primary transparent
                onPress={() => { this.props.navigation.navigate('Domain') }}
              >
                <Text>Customize</Text>
              </Button>
          </Right>
        </Header>
        <Tabs>
          <Tab heading=" 💻 Events">
            <Tab1 />
          </Tab>
          <Tab heading=" 📕 Study">
            <Tab2 />
          </Tab>
          <Tab heading="🎤Talks">
            <Tab3 />
          </Tab>
          <Tab heading="💼 Work">
            <Tab4 />
          </Tab>
        </Tabs>
        
      </Container>
    );
  }
}