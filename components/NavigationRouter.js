import React from 'react';
import { View ,Text, Button} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Htip from './Htip';
import Comlead from './Comlead';
import Enter from './Enter';
import It from './It';
 import Level1 from './Level1';
import Level2 from './Level2';
import Webdesign from './Webdesign';
import Webdev from './Webdev';
import Appdev from './Appdev';
import Java from './Java';
import Database from './Database';
import Iit from './Iit';
import Nonit from './Nonit';
import Nonitdata from './Nonitdata';
import Clp from './Clp';
import Splash from './Splash';
import Lp from './Lp';
import Htnonit from './Htnonit';
import Courseit from './Courseit';
import Itnondev from './Itnondev';
const Dashboard = createStackNavigator({


  Splash: { 
    screen: Splash,
    navigationOptions: {
         header: null,
    },
  },

  Home: { 
    screen: Home,
    navigationOptions: {
        header: null,
    },
  },
  //Dashboard:Home,
 Htip:Htip,
 Comlead:Comlead,
 Enter:Enter,
 It:It,
Level1:Level1,
 Level2:Level2,
 Webdesign:Webdesign,
 Webdev:Webdev,
 Appdev:Appdev,
 Java:Java,
 Database:Database,
 Iit:Iit,
 Nonit:Nonit,
 Nonitdata:Nonitdata,
 Clp:Clp,
 Lp:Lp, 
 Htnonit:Htnonit,
 Courseit:Courseit,
 Itnondev:Itnondev,
});

export default createAppContainer(Dashboard);