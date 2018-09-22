/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native';

export default class HeroImage extends Component {
  render() {
    return (

        <ImageBackground
          source={require('./img/img1.jpg')}
          style={styles.hero}
           >
         
         </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  hero: {
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
