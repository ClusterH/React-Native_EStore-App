
import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Text, TextInput, StatusBar } from 'react-native';
import GlobalStyle from '../../Components/GlobalStyle';

export default class Start extends Component {
	static navigationOptions = {
		header: null
	};

	render() {
		return (
			<View style={{width:'100%', height:'100%', alignItems:'center', flex:1, flexDirection:'column', backgroundColor:GlobalStyle.colorStart}}>
				<StatusBar barStyle="dark-light" translucent={true} backgroundColor={GlobalStyle.colorStart} hidden={false}></StatusBar>

				<View style = {{height:40}}></View>
				<Text style={{ position: 'absolute', bottom: 130, fontSize:24, color:'white' }}>Let's Get Started</Text>

				<TouchableOpacity style = {styles.btnNext} onPress = {()=>this.props.navigation.navigate('Login')}>
					<Text style = {{ fontSize:18, fontWeight:'500'}}>Next</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({

	btnNext: {
		position:'absolute',
		bottom: 50,
		height: 40,
		width: '50%',
		backgroundColor: GlobalStyle.colorYellow,
		justifyContent:'center',
		alignItems: 'center',
		borderRadius: 20,
	},

});