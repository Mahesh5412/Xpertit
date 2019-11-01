import React, { Component } from 'react';
import { NavigationActions, StackActions } from 'react-navigation'
import { AppRegistry, View ,Text, TouchableOpacity,Image} from 'react-native';

const resetAction=StackActions.reset({
    index:0,
    actions:[
        NavigationActions.navigate({routeName:'Home'})
    ]
})


export default class Splash extends Component {

  
  componentDidMount(){
      setTimeout(
          ()=>{
              this.props.navigation.dispatch(resetAction)
        
          },
        2000
      );
  }
    render() {
    return (
     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image source = {require('./images/xpert3.png')}/>
    </View>
    );
  }
}