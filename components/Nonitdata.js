import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity,} from 'react-native';
import {createStackNavigator, createAppNavigator,createAppContainer} from 'react-navigation';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { TapGestureHandler } from 'react-native-gesture-handler';



 export default class Nonit extends Component {
  static navigationOptions = {
    title: 'Course Non IT',
  
    headerTitleStyle :{flex:1,marginLeft:70,alignSelf:'center' ,color:'#0099cc'},
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
        onPress={() => this.props.navigation.navigate('C')} >
          
          <Text style={styles.signUpText}>Content Writing</Text>
          <Text style={styles.signUpText1}>Duration : 45 Days</Text>

    </TouchableOpacity>
                  
          </View>
 </View>      
        
        
        
<View style={styles.boxtwo}>
         <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('L')} >
          
          <Text style={styles.signUpText}>Sales</Text>
          <Text style={styles.signUpText1}>Duration : 45 Days</Text>
    </TouchableOpacity>
          </View>
       </View>


        
        
<View style={styles.boxthree}>
    
     <View style={styles.signup}>
    <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} 
  onPress={() => this.props.navigation.navigate('Arts')} >
          
          <Text style={styles.signUpText}>Bussiness Associate</Text>
          <Text style={styles.signUpText1}>Duration : 45 Days</Text>
    </TouchableOpacity>
          </View>


      
 </View>   
        
        </ScrollView>
        
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
  signUpText1: {
    fontSize:10,
    fontWeight: 'bold',
    color: '#FFF',
   alignItems: 'center',
  },
     signUpText: {
    fontSize:20,
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