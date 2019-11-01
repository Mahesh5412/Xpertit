import React, { Component } from 'react';
import ResponsiveImage from 'react-native-responsive-image';
import { AppRegistry, View ,Text,Linking, TouchableOpacity,StyleSheet,TouchableHighlight, Alert, Dimensions,Image} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {Icon,Title,Button,Container,Content,Header,Right,Left,Body,Tab, Tabs, TabHeading,Footer,FooterTab} from 'native-base';

export default class Home extends Component {
    render() {
      return (
        <View style={{flex: 1,justifyContent: 'space-around'}}>
              <Header 

           style={{
          backgroundColor: '#FFF', 
         // height: 80,
          width: Dimensions.get('window').width, 
          //borderBottomColor: '#F79D17',
          justifyContent: 'space-between', height:50,
      
        }}>
           <Left>
                 
          </Left>
          <View style={styles.images}>

          <Body >
          <ResponsiveImage source = {require('./images/xpert.png' )}
          initWidth="150"
           initHeight="50"
             
                />

          </Body>
          </View>
          <Right>
                 
                 </Right>


        </Header>
       


               <View style={{flex: 1,flexDirection: 'row',justifyContent: 'space-around',alignItems: 'center',}}>
                <TouchableOpacity 
                style={styles.Intermediate}
               
                onPress={() => {this.props.navigation.navigate('Htip')}}>
                 <Image source = {require('./images/human-resources.png')}
                style={{marginTop:10, width:50,height:50}}
                />
             
                <Text style={styles.IntermediateText}>Hidden Talent Identification Program</Text>
                </TouchableOpacity>
               


                <TouchableOpacity 
                style={styles.Industrial}
                onPress={() => {this.props.navigation.navigate('Comlead')}}>
                 <Image source = {require('./images/monitor-data.png')}
                style={{marginTop:10, width:50,height:50}}
                />
                
                <Text style={styles.IndutstrialText}>Communication Leadership Presentation</Text>
                </TouchableOpacity>
                </View>


                <View style={{flex: 1,flexDirection: 'row',justifyContent: 'space-around',alignItems: 'center',}}>
                <TouchableOpacity 
                style={styles.Graduation}
                
                onPress={() => {this.props.navigation.navigate('Courseit')}}>
                  <Image source = {require('./images/teamwork.png')}
                                  style={{marginTop:10, width:50,height:50}}
                                  />
                <Text style={styles.GraduationText}>IT</Text>

{/* <Image source={require('./images/grad.png')} 
        style={{width:30,height:30}}/> */}
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.PGPHD}
                onPress={() => {this.props.navigation.navigate('Nonitdata')}}>
            
                 <Image source = {require('./images/non-stop-call.png')}
                style={{marginTop:10  , width:50,height:50}}
                />
              
                <Text style={styles.PGPHDText}>Non-IT</Text>
                </TouchableOpacity>
                </View>


                <View style={{flex: 1,flexDirection: 'row',justifyContent: 'space-around',alignItems: 'center',}}>
                <TouchableOpacity 
                style={styles.Entrepreneurship}
                onPress={() => {this.props.navigation.navigate('Enter')}}>
                 <Image source = {require('./images/talent.png')}
                style={{marginTop:10, width:50,height:50}}
                />
                
                <Text style={styles.EntrepreneurshipText}>Internship Opportunities</Text>
                </TouchableOpacity>
                
                </View>
        
           

     </View>





      );
    }
  }

  const styles = StyleSheet.create({

    SSC: {
      
      backgroundColor: '#0a8ea0',
     
      width:wp('45%'),
      height: hp('25%'),
      alignItems: 'center',
      justifyContent: 'space-around',
    },

    Intermediate: {
      backgroundColor: '#30c39e',
     // marginTop:10,
      //marginLeft:10,
      width:wp('45%'),
      height: hp('27%'),
      alignItems: 'center',
      justifyContent: 'center',
    },
    Industrial: {
      backgroundColor: '#00bce4',
      //marginTop:10,
      //marginLeft:20,
      width:wp('45%'),
      height: hp('27%'),
      alignItems: 'center',
      justifyContent: 'center',
    },
    images: {
      marginLeft:49,
      
      alignItems: 'center',
      justifyContent: 'center',
    },
    Graduation: {
      backgroundColor: '#f47721',
      //marginTop:10,
      //marginLeft:10,
      width:wp('45%'),
      height: hp('25%'),
      alignItems: 'center',
      justifyContent: 'center',
    },
    PGPHD: {
      backgroundColor: '#d20962',
      //marginTop:10,
      //marginLeft:20,
      width:wp('45%'),
      height: hp('25%'),
      alignItems: 'center',
      justifyContent: 'center',
    },
    Entrepreneurship: {
      backgroundColor: '#146eb4',
      //marginTop:10,
      //marginLeft:10,
      width:wp('90%'),
      height: hp('25%'),
      alignItems: 'center',
      justifyContent: 'center',
    },
    CompetitiveExamJobs: {
      backgroundColor: '#b1bf33',
      //marginTop:10,
      //marginLeft:20,
      width:wp('45%'),
      height: hp('20%'),
      alignItems: 'center',
      justifyContent: 'center',
    },
 

    IntermediateText:{
        // paddingTop:70,
        // paddingBottom:70,
        color:'white',
        fontSize:16,
        textAlign:'center',
    },
    IndutstrialText:{
      // paddingTop:70,
      // paddingBottom:70,
      color:'white',
      fontSize:16,
      textAlign:'center',
    },
    GraduationText:{
      // paddingTop:70,
      // paddingBottom:70,
      color:'white',
      fontSize:18,
      textAlign:'center',
    },
    PGPHDText:{
      // paddingTop:70,
      // paddingBottom:70,
      color:'white',
      fontSize:18,
      textAlign:'center',
    },
    EntrepreneurshipText:{
      // paddingTop:70,
      // paddingBottom:70,
      color:'white',
      fontSize:18,
      textAlign:'center',
    },
    CompetitiveExamJobsText:{
      // paddingTop:70,
      // paddingBottom:70,
      color:'white',
      fontSize:20,
      textAlign:'center',
    },
    telugu:{
      color:'#03a9f4',
    }, 
    english:{
      color:'#03a9f4',
    },
 
  });
	
	