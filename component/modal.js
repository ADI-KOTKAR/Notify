import React, { Component } from 'react';
import { Dimensions,Image, Modal, Share } from 'react-native';
import { WebView } from 'react-native-webview';
import {Container, Header, Content, Body, Left, Icon, Right, Title, Button} from 'native-base';

const webViewHeight = Dimensions.get('window').height - 56;

// create a component
class ModalComponent extends Component {

    constructor(props) {
        super(props);
    }

    handleClose = () => {
        return this.props.onClose();
    }

    handleShare = () => {
        const {URL, Title} = this.props.articleData;
        message = `${Title}\n\nRead More @${URL}\n\nShared via Notify App.`;
        return Share.share(
            {Title, message, URL: message},
            {dialogTitle:`Share ${Title}`}
        );
    }

    render() {
        const { showModal, articleData } = this.props;
        const { URL } = articleData;
        if( URL != undefined ) {
        return (
            <Modal
                animationType="slide"
                transparent
                visible={showModal}
                onRequestClose={this.handleClose}
            >
                <Container style={{ marginBottom:0, backgroundColor:'#fff'}}>
                    <Header>
                        <Left>
                            <Button onPress={this.handleClose} transparent>
                                <Icon name="close" style={{color: 'white', fontSize: 20}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Title children={articleData.Title} style={{color: 'white'}}/>
                        </Body>
                        <Right>
                            <Button onPress={this.handleShare} transparent>
                                <Icon name="share" style={{color: 'white', fontSize: 20}}/>
                            </Button>
                        </Right>
                    </Header>
                    
                        <WebView source={{uri:URL}} onError={this.handleClose} javaScriptEnabled={true}
                            domStorageEnabled={true}
                            startInLoadingState={true}
                            scalesPageToFit
                        />
                    
                </Container>
            </Modal>
        );
        } else {
            return null;
        }
    }
}

export default ModalComponent;

