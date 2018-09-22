import React from 'react';
import { Text, View,TouchableOpacity,Linking,StyleSheet,ScrollView } from 'react-native';
import colors from '../utils/colors';
import { Card, Divider,List,ListItem } from 'react-native-elements';
import { getOrg } from '../components/OrgApi'

export default class Support extends React.Component {
 
 static navigationOptions = ({ navigation: { navigate } }) => ({
    title: 'Support',
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
           
           <TouchableOpacity onPress={()=>{ 
             Linking.openURL('mailto:support@domain.com?subject=mailsubject&body=mailbody');
                                }}>
            <ScrollView style={styles.body}>
               <Text style={styles.bodyText1}>{item.support1}</Text>
               <Text style={styles.bodyText2}>{item.support2}</Text>
               <Text style={styles.bodyText3}>{item.support3}</Text>
               <Text style={styles.title}>Contact Us</Text>
            </ScrollView>
        </TouchableOpacity>
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
  
  title:{
    marginTop:50,
    textAlign:'center',
    fontSize:20,
    color:'blue',
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
