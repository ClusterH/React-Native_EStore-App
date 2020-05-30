
import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Text, TextInput, StatusBar } from 'react-native';

import ImagesImport from '../../Components/Images';
import GlobalStyle from '../../Components/GlobalStyle';

export default class Login extends Component {

	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
		};
	}

	login() {

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
		this.props.navigation.navigate('BottomTabNavigation');
		

	};

	forgotpass() { // action: send email for password reset@
		const email = this.state.email;
		if (email === '') {
			Toast.show({ text: "please input email", position: 'bottom', duration: GlobalStyle.toastDuration });
			return;
		}
		firebase.auth().sendPasswordResetEmail(email).then(() => {
			Toast.show({ text: "Password Rest Email Sent", position: 'bottom', duration: GlobalStyle.toastDuration })
		}).catch((e) => {
			console.log(e)
			Toast.show({ text: "Something Wrong!", position: 'bottom', buttonText: "Try Again", duration: GlobalStyle.toastDuration })
		});

	//For test
		this.props.navigation.navigate('OTPlogin')
    }
    
    signup() {
        this.props.navigation.navigate('Signup')
    }

    facebooklogin() {
		this.props.navigation.navigate('BottomTabNavigation');
    }

	render() {
		return (
				<View style={{height:'100%', height:'100%', alignItems:'center', flexGrow:1, flexDirection:'column', backgroundColor:GlobalStyle.colorLoginBackground }}>
                    <StatusBar barStyle="dark-light" translucent={true} backgroundColor={GlobalStyle.colorLoginBackground} hidden={false}></StatusBar>
						
                    <Text style ={{color:'#FFF', marginTop:100, fontSize:28,  }}>Ozoon Market</Text>
    
                    <View style = {{marginTop:10, marginBottom: 10, alignItems:'center', height: 120, width: 120, borderRadius:60}} >
                        <Image style={{height:120, width:120}} source = {ImagesImport.login_home} ></Image>
                    </View>

                    <TextInput style = {styles.usernametxt}
                        placeholder = "User Name"
                        placeholderTextColor = "gray"
                        selectionColor= {GlobalStyle.Orange}
                        multiline = {false}
                        
						keyboardType='default'
                        textContentType='name'
                        onChangeText={username=> this.setState({ username })}

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

                    <TouchableOpacity style={styles.forgotpass} onPress = {()=>this.forgotpass()} >
                        <Text style={{color:'#FFF', fontSize: 12, fontWeight:'500'}}>Forgot password ?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonlogin} onPress={()=>this.login()}>
                        <Text style={{color:'#FFF', fontSize: 18, fontWeight:'500'}}>Sign in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonlogin} onPress={()=>this.signup()}>
                        <Text style={{color:'#FFF', fontSize: 18, fontWeight:'500'}}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnfblogin} onPress = {()=>this.facebooklogin()}>
                        <Text style = {{color:'#FFF', fontSize:18, fontWeight:'500'}}>Login with Facebook</Text>
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
		marginTop: 10,
		backgroundColor: 'white',
		height: 40,
		width: '70%',
		textAlign:'center',
		fontWeight:'bold',
		color: '#000',
		fontSize: 14,
		borderRadius: 20,
		},
	buttonlogin: {
        marginBottom: 10,
		height: 40,
		width: '60%',
		backgroundColor: '#1de94d',
		justifyContent:'center',
		alignItems: 'center',
		borderRadius: 20,
	},
	forgotpass:{
		marginVertical:20,
		width: '70%',
		flexDirection:'row',
		justifyContent: 'center'
    },
    btnfblogin: {
        marginTop: 10,
		height: 40,
		width: '70%',
		backgroundColor: '#2019f3',
		justifyContent:'center',
		alignItems: 'center',
		borderRadius: 20,
    }

});