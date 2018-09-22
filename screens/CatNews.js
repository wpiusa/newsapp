import React,{ Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Platform, 
  ActivityIndicator,
  FlatList,
  Alert,
} from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../utils/colors';
import { getNews } from '../components/CatNewsApi';
import Article from '../components/Article';

class CatNews extends Component {
 static navigationOptions = ({ navigation,navigate }) => ({
    title:navigation.state.params.catName,
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: colors.blue,
    },
   
  });
 
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }

  
  componentDidMount() {
   
   const { navigation }=this.props;
    const id = this.props.navigation.state.params.catTitle;
  
    this.fetchNews(id);
 
  }

  fetchNews(id) {
    getNews(id)
      .then(articles => this.setState({articles,refreshing: false,}))
       .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
      },
      () => this.fetchNews()
    );
  }
  
  renderItem = ({ item }) => {
    const {
      navigation: { navigate },
    } = this.props;
    
    const { articles }=this.state;
    const { _id,author,body,title,description,category,background,publishedDate,updatedAt} = item;

    return (
      <Article
          article={item}
          onPress={() =>  navigate('detail',{article:item.body}) }
      />
    );
  };
  
  renderFooter = () => {
    const { articles }=this.state;
    if (articles.length != 0) return null;
    
    return <Text style={styles.nodataTextStyle}>There is no articles avilable this time. Coming Soon !</Text>
  
   
};

  render() {
    
     return (
          <FlatList
            data={this.state.articles}
            renderItem={this.renderItem}
            keyExtractor={item => item.url}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh.bind(this)}
            ListFooterComponent={this.renderFooter}
          />
    );   
   
  }
}

const styles ={
  nodataTextStyle:{
    margin:40,
    fontSize:20,
    color:'red',
  }
}
export default CatNews;