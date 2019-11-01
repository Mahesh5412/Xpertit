
import React, {Component} from 'react';

import { Button, Linking, StyleSheet,Image, Text, View } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
export default class Enter extends Component {
  render() {
    return (
      <View style={styles.container}>
            <Text style={styles.Text}>Internship </Text>

        <AutoHeightImage
          width={200}
          source={Image}
        />
         
        <AutoHeightImage
          width={200}
          source={require('./images/name.png')}/>
              <Text></Text>
    
                <Text></Text>
    <Text style={styles.Next}> Internship Opportunities</Text>
               <Text></Text>
    
                <Text></Text>
    <Text style={styles.Next}>Duration : 2 Weeks </Text>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
  marginTop:45,
  justifyContent: 'center',
  alignItems: 'center',
  },
  Text:{
  fontSize:40,
  fontWeight: 'bold',
  },
  Next:{
    fontSize:20,
  fontWeight: 'bold',
    marginLeft:17,
    marginRight:17,
    justifyContent: 'center',
  alignItems: 'center',
  textAlignVertical: "center",
  textAlign:'right',
  textAlign:'left'

  
  
  }

});