import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux'


class RedeemScreen extends Component {

    render(){

        return (
            <View style = {styles.container}>
                <Text 
                    style = {styles.welcome}
                >
                    Redeem Screen
                </Text>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#171C2F',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color : '#F5318D'
    }
  });
  
  export default RedeemScreen