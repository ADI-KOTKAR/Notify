import React, { Component } from 'react';
import { Container, Header, Left, Body, Right,H1, Title, Content, Thumbnail, ScrollableTab, Tab, Tabs } from 'native-base';
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
        <Header hasTabs transparent>
          
          <Body>
              <Thumbnail source={{uri: "https://raw.githubusercontent.com/ADI-KOTKAR/DummyData/master/icons8-light-on-100.png"}} 
                style={{marginRight:"auto", marginLeft:"auto"}}/>
          </Body>
          
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