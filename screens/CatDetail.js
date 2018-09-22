import React from 'react';
import { 
  StyleSheet, 
  ScrollView,
  Text,
  Dimensions, 
} from 'react-native';

import HTML from 'react-native-render-html';
import colors from '../utils/colors';

export default class CatDetail extends React.Component {
  render() {
   
   const { navigation }=this.props;
   const itemHTML = navigation.getParam('article', 'body');
   
    return (
      <ScrollView>
        <HTML html={itemHTML} imagesMaxWidth={Dimensions.get('window').width} />
      </ScrollView>
    );
  }
}

