import React, {Component} from 'react'
import {List, ListItem, Left, Right, Thumbnail, Body, View, Text, Button} from 'native-base'

export default class Dataitem extends Component {
    constructor(props){
        super(props);
        this.data = props.data
    }
    
    handlePress = () =>{
        const {URL, Title} = this.data
        this.props.onPress({URL, Title})
        console.log(URL,Title)
    }

    render() {
        return ( 
            <ListItem thumbnail>
                <Left>
                <Thumbnail square source={{ uri: this.data.Image != null ? this.data.Image : 
                'https://img.icons8.com/clouds/100/000000/error.png' }} />
                </Left>
                <Body>
                <Text note numberOfLines={2}>{this.data.Title}</Text>
                <View>
                    <Text>{this.data.Domain} - {this.data.Event}</Text>
                </View>
                </Body>
                <Right>
                <Button transparent onPress={this.handlePress}>
                    <Text>View</Text>
                </Button>
                </Right>
            </ListItem>
        )
    }
}
