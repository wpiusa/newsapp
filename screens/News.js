import React,{ Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Platform, 
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../utils/colors';
import { getNews } from '../components/NewsApi';
import Article from '../components/Article';


class News extends Component {
 static navigationOptions = ({ navigation: { navigate } }) => ({
    title: 'News',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: colors.blue,
    },
   
    headerLeft: (
      <MaterialIcons
        name="reorder"
        size={24}
        style={{ color: 'white', marginRight: 10 }}
        onPress={() => navigate('category')}
      />
    ),
  });
 
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }

  
  componentDidMount() {
   
    this.fetchNews();
  }

  fetchNews() {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
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
  
//title  description author headerimgURL category date
  renderItem = ({ item }) => {
    const {
      navigation: { navigate },
    } = this.props;
    const { _id,title,description,author,headerimgURL,articleURL,category,date } = item;
   
    return (
      <Article
          article={item}
          onPress={() => navigate('detail',{article:item.articleURL})}
        
      />
    );
  };
  
  render() {
 
    return (
      <FlatList
        data={this.state.articles}
        //renderItem={({ item }) => <Article article={item} />}
        renderItem={this.renderItem}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
    );
  }
}

export default News;