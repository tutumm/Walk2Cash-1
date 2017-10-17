import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux'


class UserScreen extends Component {

    render() {

        return (
            <View style = {styles.container}>
                <Text 
                    style = {styles.welcome}
                >
                    User Screen
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
  
  export default UserScreen