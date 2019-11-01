import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity,} from 'react-native';
import {createStackNavigator, createAppNavigator,createAppContainer} from 'react-navigation';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { TapGestureHandler } from 'react-native-gesture-handler';



 export default class Java extends Component {
  static navigationOptions = {
    title: 'Java',
  
    headerTitleStyle :{flex:1,textAlign: 'center',alignSelf:'center' ,color:'#0099cc'},
    headertintColor:'#1E90FF',
    headerStyle:{
        backgroundColor:'white',
      
    },
};
  render() {
    return (
        
<ScrollView style={styles.container}>
 <View style={styles.boxone}>
       <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
        onPress={() => this.props.navigation.navigate('Science')} >
          
          <Text style={styles.signUpText}>Core Java</Text>


    </TouchableOpacity>
                  
          </View>
 </View>      
        
        
        
<View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Commerce')} >
          
          <Text style={styles.signUpText}>JDBC,Servelts,JSP's</Text>
     

    </TouchableOpacity>
          </View>
       </View>


        

        
        </ScrollView>
        
    );
  }
}

class MpcScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>MpcScreen</Text>
      </View>
    );
  }
}


class BipcScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>BipcScreen</Text>
      </View>
    );
  }
}



class Pcbhsscreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Pcbhsscreen</Text>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
     buttonContainer: {
    width: wp('85%'),
    height: hp('15%'),
    justifyContent: 'center',
    marginBottom:10,
    borderRadius:10,
  },
    signupButton: {
    backgroundColor: "#00A2C1",
     justifyContent: 'center',
      alignItems: 'center', 
           
  },
     signUpText: {
    fontSize:20,
    fontWeight: 'bold',
    color: '#FFF',
   alignItems: 'center',
  },

  signUpText1: {
    fontSize:10,
    fontWeight: 'bold',
    color: '#FFF',
   alignItems: 'center',
  },
     signup: {
        justifyContent: 'center',
      alignItems: 'center',
       color: 	"#FFF",
  },
 boxone:{
    flex:1,  
        
},
     boxtwo:{
       flex:1,
         
},
    boxthree:{
       flex:1,
         
},
    
});