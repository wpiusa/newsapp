import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Image,
  PropTypes,
} from 'react-native';

import colors from '../utils/colors';
import { Text, Button, Card, Divider } from 'react-native-elements';
import moment from 'moment';

export default function CategoryListItem({
  title, onPress,
}) {
  
  const { noteStyle, featuredTitleStyle } = styles;
 
  return (
    <TouchableHighlight
      underlayColor={colors.black}
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.details}>
         <Text style={[styles.item]}>{title}</Text>
         <Divider style={{ backgroundColor: '#dfe6e9' }} />
      </View>
       
      
    </TouchableHighlight>
  );
}



const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
  
  },
  item: {
   
    marginLeft:30,
    fontSize: 18,
    height: 24,
  },
  
})
