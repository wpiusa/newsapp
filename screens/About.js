import React from 'react';
import { Text, View,TouchableOpacity,Linking,StyleSheet,ScrollView } from 'react-native';
import colors from '../utils/colors';
import { Card, Divider,List,ListItem } from 'react-native-elements';
import { getOrg } from '../components/OrgApi'

export default class About extends React.Component {
 
  static navigationOptions = ({ navigation: { navigate } }) => ({
    title: 'About',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: colors.blue,
    },
   
  });

   constructor(props) {
    super(props);
    this.state = { orgs: [], refreshing: true};
    this.fetchOrgs = this.fetchOrgs.bind(this);
  }
  
  componentDidMount() {
    this.fetchOrgs();
  }

  fetchOrgs() {
    getOrg()
      .then(orgs => this.setState({ orgs, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }
  
  render() {
    
 // const { navigation: { navigate },} = this.props;
 
   return (
      <View style={styles.container}>  
        {
          this.state.orgs.map((item) => (
           
           <ScrollView style={styles.body}> 
             <Card 
               image={{
                uri:item.orgimg  
              }}
             />

             <Text style={styles.bodyText1}>{item.about1}</Text>
             <Text style={styles.bodyText2}>{item.about2}</Text>
             <Text style={styles.bodyText3}>{item.about3}</Text>
           </ScrollView>   
          ))
        }
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },

 
  body:{
    paddingLeft:40,
    paddingRight:40,
  },
  bodyText1:{
    marginTop:40,
    fontSize:20,
  },
  bodyText2:{
    marginTop:40,
    fontSize:20,
  },
  bodyText3:{
  marginTop:40,
    fontSize:20, 
  },
}) 
