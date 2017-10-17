import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  Button
} from 'react-native';
import { LinearGradient } from 'expo';
import { Actions } from 'react-native-router-flux'

export default class Profile extends Component {

   state = {
      isClicked : '',
      username : '',
      password : '',
      warning : '',
      modalVisible : false
   }

  _onForward = () => {
    
    const { username,password,warning } = this.state

    if(username == '' || password == '' ){
       this.setState({
           warning : 'Login Failed'
       })
    }else{
        Actions.tabbar({username})
        this.setState({
            warning : ''
        })
    } 

  }

  render() {

    const {username,password} = this.state
    
    return (

      <LinearGradient
      colors={['#171a2c', '#f0318b']}
      style={styles.container}>
        <Text style={styles.logoText}>Walk2Cash</Text>

        <TextInput
           style={styles.inputText}
           onChangeText={(username) => this.setState({username})}
           placeholder=' Username' 
           placeholderTextColor='rgba(255, 255, 255, 0.7)' 
        />

        <TextInput 
          style={styles.inputText}
          onChangeText={(password) => this.setState({password})}
          placeholder=' Password' 
          placeholderTextColor='rgba(255, 255, 255, 0.7)' 
          secureTextEntry 
        />

        <View style={styles.loginButton}>
          <Text 
            style={{textAlign: 'center', backgroundColor: 'transparent', fontSize: 18, color: '#F0318B'}}
            onPress = { this._onForward }            
          >
            Login
          </Text>
        </View>

        <View style={styles.signUpButton}>
          <Text style={{textAlign: 'center', backgroundColor: 'transparent', fontSize: 18, color: 'white'}}>Sign Up</Text>
        </View>
        
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      paddingTop : Platform.OS === "ios" ? 25 : 0,    
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#5A1F44',
    },
    logoText: {
      fontSize: 40,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent'
    },
    inputText: {
      height: 40,
      width: '80%',
      borderBottomColor: 'white',
      borderBottomWidth: 1,
      color: 'rgba(255, 255, 255, 0.7)',
    },
    loginButton: {
      marginTop: 30,
      borderRadius: 50,
      height:28,
      width: '80%',
      backgroundColor:'white',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff'
    },
    signUpButton: {
      marginTop: 15,
      borderRadius: 50,
      height:28,
      width: '80%',
      borderRadius:10,
      borderWidth: 2,
      borderColor: '#fff'
    },
  });
  
