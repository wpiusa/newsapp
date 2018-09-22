/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
         
          style={styles.logo}
           />
         <Text style={styles.title}>The Informer</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    marginTop: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: Dimensions.get('window').width,
    borderBottomWidth: 4,
    borderBottomColor: '#ccc',

  },
 
  title: {
    color: '#000',
    fontSize: 20,
    fontStyle: 'italic',
  },
});
