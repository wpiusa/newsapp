import React from 'react';
import { 
  StyleSheet, 
  ScrollView,
  Text,
  Dimensions, 
  WebView,
} from 'react-native';

//import HTML from 'react-native-render-html';
import colors from '../utils/colors';


export default class Detail extends React.Component {
  render() {
   
   const { navigation }=this.props;
   const itemHTML = navigation.getParam('article', 'articleURL');
   
    return (
      <WebView 
        source={{uri: itemHTML}}
       
      />
    );
  }
}

