import React, { Component } from 'react';
import { StyleSheet,
    View,
    Text,
    } from 'react-native';

import BottomTab from '../../Components/BottomTab';

export default class Order extends Component {
    static navigationOptions = {
        header : null
    };
    
    render() {
        return(
            <View style = {{ width:'100%', height:'90%', justifyContent:'center', alignItems:'center'}}>
                <Text > bbbbbbbbb</Text>
            </View>
        );
	}
}