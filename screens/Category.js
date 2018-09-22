import React from 'react';
import { StyleSheet, View,FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../utils/colors';
import { Text,List,ListItem  } from 'react-native-elements';
import { getCategory } from '../components/CategoryApi'


export default class Category extends React.Component {
 
  static navigationOptions = ({ navigation: { goBack } }) => ({
    title: 'Category',
    
  });

   constructor(props) {
    super(props);
    this.state = { categories: [], refreshing: true};
    this.fetchCategories = this.fetchCategories.bind(this);
  }
  
  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories() {
    getCategory()
      .then(categories => this.setState({ categories, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }
  
  render() {
    
  const { navigation: { navigate },} = this.props;
 
   return (
     <List>
        {
          this.state.categories.map((item) => (
            <ListItem
              style={{marginTop:10}}
              key={item._id}
              title={item.category}
              onPress={() => navigate('catnews',
              {
                catTitle:item._id,
                catName:item.category
              })}
             />
          ))
        }
    </List>
    );
  }
}


