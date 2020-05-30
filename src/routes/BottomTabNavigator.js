import React, {Component} from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import { StyleSheet,
	    Image,
	    TouchableOpacity,
	    View,
	    } from 'react-native';

import Home_Main from '../pages/Home/Home';
import Cart_Main from '../pages/Cart/Cart';
import Order_Main from '../pages/Order/Order';
import Setting_Main from '../pages/Setting/Setting';
import Description from '../pages/Home/Description';
import ImagesImport from '../Components/Images';

class HomeStack extends Component {
	static navigationOptions = {header: null};
	render() {
		return (
			<Home_Main />
		)
	}
}
class CartStack extends Component {
	static navigationOptions = {header: null};

	render() {
		return (
			<Cart_Main />
		)
	}
}
class OrderStack extends Component {
	static navigationOptions = {header: null};

	render() {
		return (
			<Order_Main />
		)
	}
}
class SettingStack extends Component {
	static navigationOptions = {header: null};

	render() {
		return (
			<Setting_Main />
		)
	}
}

const Home = createStackNavigator({
	HomeStack,
	Description: { screen: Description },
},	
{
	headerMode: 'screen',
    initialRouteName: 'HomeStack',
});

const Cart = createStackNavigator({
	CartStack,
	Description: { screen: Description },
},	
{
// initialRouteName: 'Homes',
});
const Order = createStackNavigator({
	OrderStack,
	Description: { screen: Description },
},	
{
// initialRouteName: 'Homes',
});

const Setting = createStackNavigator({
	SettingStack,
	Description: { screen: Description },
},	
{
// initialRouteName: 'Homes',
});

const TabMainRouter = createBottomTabNavigator({
	Home: {
		screen: Home,
		navigationOptions: () => ({
			header: {visible: false},
			tabBarIcon: ({tintColor}) =>(
				<Image style = {[{width: 20, height: 20}, {tintColor: tintColor}]} source = {ImagesImport.home_active} />
			)
		})
	},
	Cart: {
		screen: Cart,
		navigationOptions: () => ({
			tabBarIcon: ({tintColor}) =>(
				<Image style = {[{width: 23, height: 23}, {tintColor: tintColor}]} source = {ImagesImport.cart_active} />
			)		
		})
	},
	Order: {
		screen: Order,
		navigationOptions: () => ({
			tabBarIcon: ({tintColor}) =>(
				<Image style = {[{width: 25, height: 20}, {tintColor: tintColor}]} source = {ImagesImport.order_active} />
			)		
		})
	},
	Setting: {
		screen: Setting,
		navigationOptions: () => ({
			tabBarIcon: ({tintColor}) =>(
				<Image style = {[{width: 20, height: 20}, {tintColor: tintColor}]} source = {ImagesImport.setting_active} />
			)		
		})
	},
},
{
	initialRouteName: 'Home',
	tabBarOptions: {
		 activeTintColor: 'black', inactiveTintColor: 'gray',
		 showIcon: true, showLabel: false,
		 style: {
			//  backgroundColor: '#171f33'
		 }
	}
});
  
export default createAppContainer( TabMainRouter);
