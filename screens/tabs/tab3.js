import React, { Component } from 'react';
import { Alert, View, ActivityIndicator, FlatList } from 'react-native';
import { Container, Content, List, Text } from 'native-base';

import DataItem from '../../component/dataitem';
import Modal from '../../component/modal';

import { getTalks } from '../../service/talks';

export default class ListThumbnailExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {}
    }
  }

  handleItemDataOnPress = (articleData) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData
    });
  }

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {}
    });
  }

  componentDidMount() {
    getTalks().then(data => {
      this.setState({
        isLoading: false,
        data: data
      });
    }, error => {
      Alert.alert('Error', 'Something went wrong!');
    }
    )
  }

  render() {
    console.log(this.state.data);

    let view = this.state.isLoading ? (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
        <Text style={{marginTop: 10}} children="Please Wait.." />
      </View>
    ) : (
      <FlatList
        data={this.state.data}
        renderItem={({item}) => {
          return (
            <DataItem onPress={this.handleItemDataOnPress} data={item} />
          )
        }}
        keyExtractor={(item,index)=>index.toString()}
      />
    )

    return (
      <Container>
        <Content>
          {view}
        </Content>
        <Modal 
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}