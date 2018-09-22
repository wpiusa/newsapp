import React, { Component } from 'react';
import {
  Platform, 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  ScrollView
  } from 'react-native';

import Header from '../components/Header';
import HeroImage from '../components/HeroImage';
import Body from '../components/Body';
import axios from "axios";

 //source = {require('../assets/news.jpg')} style={{width:'100%', height: '100%', resizeMode: 'contain'}} />
export default class Welcome extends Component {
  
  

  componentDidMount(){
     const {navigate} = this.props.navigation;
     
     setTimeout(() => {
         navigate('news')
     }, 3000);  
/*

     axios.post('https://news-mobile-app.herokuapp.com/api/notify', {
    category:{
      world:false,
      Sports:false,
      Music:true,
    },
    token: 'ExponentPushToken[xNnXzwHtO8LbX_qy8ot5Ec-2]'  
    
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    */
  }
  
  render() {
     
    return(
      <ScrollView style={styles.container}>
        <Header />
          <HeroImage />
        <Body />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});

