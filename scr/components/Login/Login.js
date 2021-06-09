import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Button
} from 'react-native';


export default function Login({navigation})
{
  const pressHandler = ()=>{
    navigation.replace('Home');
  }
    return(
      <View style={styles.container}>
        <View style={styles.home}>
            <Image source={require('../../images/confident.png')} resizeMode ='contain' style={{
                width:200
            }}/>
        </View>
            <TextInput
            placeholder="Enter Account number"
            returnKeyType="next"
            //onSubmitEditing={()=> this.passwordInput.focus()}
            style={styles.input}
             />
        <TextInput
            placeholder="Enter password"
            returnKeyType="go"
            secureTextEntry
            style={styles.input}
            //ref={(input) => this.passwordInput =input}
             />
        <Button
        title = "Login"
        color = 'black'
        onPress={pressHandler}
        />

    </View>
      
    );
  }
//#050339 blue
//#F29303 yellow
//#F5F5F5 grey

const styles = StyleSheet.create({
  container:{
    height:'100%',
    padding: '10%',
    backgroundColor:'#FFFFFF'
  },
  input:{
      height:'10%',
      marginBottom: 100,
      
      
  },
  buttonContainer:{
   backgroundColor:'#FFFFFF',
   paddingVertical:50
   
  },
  buttontext:{
      textAlign:'center',
      color:'#050339',
      fontWeight: '700'

  },
  home:{
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 0,
    alignItems: 'center'
  }
});

