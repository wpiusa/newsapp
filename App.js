import React, { Component } from 'react';
import {
  View,
  Alert,
} from 'react-native';


import AppNavigator from './routes';

export default class App extends Component {
  
  
  render(){
    return(<AppNavigator />)
  }
}
