import React from 'react';
import { StyleSheet, View,FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../utils/colors';
import { Text,List,ListItem  } from 'react-native-elements';
import { getCategory } from '../components/CategoryApi'


export default class Notify extends React.Component {
 
  static navigationOptions = ({ navigation: { goBack } }) => ({
    title: 'Category',
    
  });

   constructor(props) {
    super(props);
    this.state = { categories: [], refreshing: true,switchState: false,switchSelection:[] };
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

  _updateSwitch(item,value){
   console.log(item)
   console.log(value)
    this.setState(previousState => {
       return {...previousState,switchState: previousState}
    })
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
              switched={this.state.switchState}
              switchButton
              hideChevron
              onSwitch={(value) => this._updateSwitch(item.category,value) 
              //this.setState(previousState => {
              //  return {...previousState,switchState: previousState}
             // })
            }
             />
          ))
        }
    </List>
    );
  }
}



