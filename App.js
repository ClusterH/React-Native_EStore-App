import React, {Component} from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

import Start from './src/pages/Auth/Start';
import Login from './src/pages/Auth/Login';
import Signup from './src/pages/Auth/Signup';
import Facebook from './src/pages/Auth/FacebookLogin';
import ForgotPassword from './src/pages/Auth/ForgotPassword';
import BottomTabNavigator from './src/routes/BottomTabNavigator';



const MainRouter = createSwitchNavigator({
  'Start':           { screen: Start },
  'Login' :          { screen: Login },
  'Signup' :         { screen: Signup},
  'ForgotPassword' : { screen: ForgotPassword },
  'Facebook' :       { screen: Facebook },
  'BottomTabNavigation' : { screen: BottomTabNavigator},
},
{
  initialRouteName: 'Start',
});

export default createAppContainer( MainRouter);


