import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import { Actions } from 'react-native-router-flux'
import { Font } from 'expo';


class DashboardScreen extends Component {
    componentDidMount() {
        Font.loadAsync({
          'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
        });
      }


    render(){
        return (
            <View style = {styles.container}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                {/* <Text 
                    style = {styles.welcome}
                    onPress = {() => Actions.black() }
                >
                    Dashboard Screen
                </Text>

                <Text style = {{color : '#F5318D'}}>Welcome {this.props.username} :)</Text> */}


                <View style={styles.card}>
                    <Text style={styles.textstyle}>MY POINTS: 100000</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.textstyle}>Circle</Text>
                </View>




            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#262d47',
        shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.6, shadowRadius: 10,
        width: 250,
        height: 80,
        margin: 10,
        fontFamily: 'Montserrat-Regular'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#171C2F',
    },
    textstyle: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color : '#F5318D'      
    }
  });
  
  export default DashboardScreen