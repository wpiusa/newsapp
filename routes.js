import React, { Component } from 'react';
import { Text, View,Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { createBottomTabNavigator, createStackNavigator,TabBarBottom } from 'react-navigation';

import About from './screens/About';
import Category from './screens/Category';
import News from './screens/News';
import Notify from './screens/Notify';
import Support from './screens/Support';
import Welcome from './screens/Welcome';
import CatNews from './screens/CatNews';
import Detail from './screens/Detail';
import CatDetail from './screens/CatDetail';

class Routes extends Component {


render(){
  const AboutScreen = createStackNavigator(
      {
       
        about: {
          screen: About,
        },
      
      },
     
 );
 
 const SupportScreen = createStackNavigator(
      {
       
        support: {
          screen: Support,
        },
      
      },
     
 );
 
 const NotifyScreen = createStackNavigator(
      {
       
        notify: {
          screen: Notify,
        },
      
      },
     
 );
 
 
  const CatScreens = createStackNavigator(
      {
       
        category: {
          screen: Category,
         
        },
        catnews: {
          screen: CatNews,
        },
       
      },
      {
       initialRouteName: 'category',
       
      },
 );

 const NewsScreens = createStackNavigator(
      {
       
        news: {
          screen: News,
        },
        detail:{
          screen:Detail,
        },
        category: {
          screen: Category,
           
        },
        catnews: {
          screen: CatNews,
        },
        
      },
      {
        mode: 'modal',
        initialRouteName: 'news',
       
      },
 );


  const Main = createBottomTabNavigator(
    {
     
      home: {
        screen: Welcome,
       
      },
      main:{
        screen:createBottomTabNavigator({
          news: {
           screen: NewsScreens,
          },
          notify : { screen: NotifyScreen },
          support : { screen: SupportScreen },
          about: { screen: AboutScreen },
        },{
          navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
              const { routeName } = navigation.state;
              let iconName;
              if (routeName === 'news') {
                   iconName = `ios-list${focused ? '' : '-outline'}`;
              } else if (routeName === 'about') {
                   iconName = `ios-book${focused ? '' : '-outline'}`;
              } else if (routeName === 'notify') {
                   iconName = `ios-notifications${focused ? '' : '-outline'}`;
              } else if (routeName === 'support') {
                  iconName = `ios-construct${focused ? '' : '-outline'}`;
              }  
      
              return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
          }),
        })
      },
      
    },
    {
      navigationOptions: ({ navigation }) => ({
        tabBarVisible: false,
      }),
      
      animationEnabled: false,
      swipeEnabled: false,
    }
);
    return(
      <Main />
    )
  }
}

export default Routes;



