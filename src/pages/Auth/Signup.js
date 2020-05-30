
import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Text, TextInput, StatusBar } from 'react-native';
import GlobalStyle from '../../Components/GlobalStyle';


export default class Login extends Component {
	static navigationOptions = {
		header: null
	};

	constructor() {
		super();
		this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            conformpwd: '',
            phonenumber: '',
		};
	}

	signup() {

		firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
			.then((res) => {
				 alert('login success!');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				if (errorCode === 'auth/wrong-password') {
					Toast.show({ text: "Wrong password!", position: 'bottom', buttonText: "Try Again", duration: GlobalStyle.toastDuration })
				} else if (errorCode === 'auth/user-not-found') {
					Toast.show({ text: "User Not Found!", position: 'bottom', buttonText: "Try Again", duration: GlobalStyle.toastDuration })
				} else {
					Toast.show({ text: "Something Wrong!", position: 'bottom', buttonText: "Try Again", duration: GlobalStyle.toastDuration })
				}
			});
		this.props.navigation.navigate('HomeStack');

	};

	render() {
		return (
				<View style={{height:'100%', height:'100%', alignItems:'center', flexGrow:1, flexDirection:'column', backgroundColor:GlobalStyle.colorLoginBackground }}>
                    <StatusBar barStyle="dark-light" translucent={true} backgroundColor={GlobalStyle.colorLoginBackground} hidden={false}></StatusBar>
						
                    <Text style ={{color:'#FFF', marginTop:60, fontSize:28,  }}>Sign Up Page</Text>

                    <TextInput style = {styles.usernametxt}
                        placeholder = "First Name"
                        placeholderTextColor = "gray"
                        selectionColor= {GlobalStyle.Orange}
                        multiline = {false}
                        
                        keyboardType='default'
                        textContentType='name'
                        onChangeText={firstname=> this.setState({ firstname })}

                        autoCapitalize="none"
                        underlineColorAndroid="transparent"
                    />

                    <TextInput style = {styles.usernametxt}
                        placeholder = "Last Name"
                        placeholderTextColor = "gray"
                        selectionColor= {GlobalStyle.Orange}
                        multiline = {false}
                        keyboardType='default'
                        secureTextEntry = {true}
                        textContentType='name'
                        onChangeText={lastname=> this.setState({ lastname })}

                        autoCapitalize="none"
                        underlineColorAndroid="transparent"
                    />

                    <TextInput style = {styles.usernametxt}
                        placeholder = "Email Address"
                        placeholderTextColor = "gray"
                        selectionColor= {GlobalStyle.Orange}
                        multiline = {false}
                        keyboardType='default'
                        secureTextEntry = {true}
                        textContentType= 'emailAddress'
                        onChangeText={email=> this.setState({ email })}

                        autoCapitalize="none"
                        underlineColorAndroid="transparent"
                    />

                    <TextInput style = {styles.usernametxt}
                        placeholder = "Password"
                        placeholderTextColor = "gray"
                        selectionColor= {GlobalStyle.Orange}
                        multiline = {false}
                        keyboardType='default'
                        secureTextEntry = {true}
                        textContentType='password'
                        onChangeText={password=> this.setState({ password })}

                        autoCapitalize="none"
                        underlineColorAndroid="transparent"
                    />

                    <TextInput style = {styles.usernametxt}
                        placeholder = "Conform Password"
                        placeholderTextColor = "gray"
                        selectionColor= {GlobalStyle.Orange}
                        multiline = {false}
                        keyboardType='default'
                        secureTextEntry = {true}
                        textContentType='password'
                        onChangeText={ conformpwd=> this.setState({ conformpwd })}

                        autoCapitalize="none"
                        underlineColorAndroid="transparent"
                    />

                    <TextInput style = {styles.usernametxt}
                        placeholder = "Phone Number"
                        placeholderTextColor = "gray"
                        selectionColor= {GlobalStyle.Orange}
                        multiline = {false}
                        keyboardType='default'
                        secureTextEntry = {true}
                        textContentType='telephoneNumber'
                        onChangeText={phonenumber=> this.setState({ phonenumber })}

                        autoCapitalize="none"
                        underlineColorAndroid="transparent"
                    />

                    
                    <TouchableOpacity style={styles.buttonlogin} onPress={()=>this.signup()}>
                        <Text style={{color:'#FFF', fontSize: 18, fontWeight:'500'}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: GlobalStyle.screenHeight,
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: GlobalStyle.colorLoginBack
	},
	usernametxt: {
		marginTop: 20,
		backgroundColor: 'white',
		height: 40,
		width: '60%',
		textAlign:'center',
		fontWeight:'bold',
		color: '#000',
		fontSize: 12,
		borderRadius: 20,
		},
	buttonlogin: {
        marginTop: 50,
		height: 40,
		width: '50%',
		backgroundColor: '#1de94d',
		justifyContent:'center',
		alignItems: 'center',
		borderRadius: 20,
	},
	

});