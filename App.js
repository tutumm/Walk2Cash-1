import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './store.js';

import { Router,Scene } from 'react-native-router-flux'

import DashboardScreen from './screens/DashboardScreen.js'
import ProductDetail from './screens/ProductDetail.js'
import CheckinScreen from './screens/CheckinScreen.js'
import RedeemScreen from './screens/RedeemScreen.js'
import UserScreen from './screens/UserScreen.js'
import ClaimVoucher from './screens/ClaimVoucher.js'
import BlueScreen from './screens/BlueScreen.js'
import LoginScreen from './screens/LoginScreen.js'
import BlackScreen from './screens/BlackScreen.js'


const TabIcon = ({ focused, title }) => {

  switch (title) {
      case 'Dashboard':
        return (
          <View>
            {focused ? (
               <Image source={require('./assets/images/graph_w.png')} style={styles.iconStyleSelected} />
            ) : (
               <Image source={require('./assets/images/graph_w.png')} style={styles.iconStyle} />
            )}
          </View>
          );
      case 'Checkin':
        return (
          <View>
          {focused ? (
               <Image source={require('./assets/images/placeholder_w.png')} style={styles.iconStyleSelected} />
              ) : (
             <Image source={require('./assets/images/placeholder_w.png')} style={styles.iconStyle} />
          )}
        </View>
        );
      case 'Redeem':
        return (
          <View>
          {focused ? (
              <Image source={require('./assets/images/ticket_w.png')} style={styles.iconStyleSelected} />
              ) : (
             <Image source={require('./assets/images/ticket_w.png')} style={styles.iconStyle} />
          )}
        </View>
        );
      case 'User':
        return (
          <View>
          {focused ? (
              <Image source={require('./assets/images/user_w.png')} style={styles.iconStyleSelected} />
              ) : (
             <Image source={require('./assets/images/user_w.png')} style={styles.iconStyle} />
          )}
        </View>
        );
  }

}

const App = () => {

    return (
      
    <Provider store = {store}>
      
      <Router>

        <Scene key = "root">

        {/* <Scene
          key = "login"
          component = {LoginScreen}
          title = "LoginScreen"
          hideNavBar={true}
          initial
        /> */}

          <Scene
             key =  "tabbar"
             tabs = {true}
             hideNavBar = {true}   
             showLabel = {false}          
             tabBarStyle = {{backgroundColor : '#262E46', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.6, shadowRadius: 10}}
              tabBarPosition = {'bottom'}
          >
          
            <Scene key = "firstTab" 
                navigationBarStyle={{backgroundColor : '#262E46',height: 80,paddingTop:20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.6, shadowRadius: 2}}
                titleStyle = {{color : 'white'}}  
                title = "Dashboard" 
                icon = {TabIcon}>

                  <Scene
                    key = "dashboard"
                    component = {DashboardScreen}
                    title = "DASHBOARD"
                    hideNavBar={false}
                  />
              
                  <Scene
                    key = "black"
                    component = {BlackScreen}
                    title = "black"
                    tintColor = '#F5318D'
                  />

            </Scene>

            <Scene key = "secondTab" 
                 navigationBarStyle={{backgroundColor : '#262E46',height: 80,paddingTop:20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.6, shadowRadius: 2}} 
                 titleStyle = {{color : 'white'}} 
                 title = "Checkin" 
                 icon = {TabIcon}>

                  <Scene
                    key = "checkin"
                    component = {CheckinScreen}
                    title = "MAP"
                    hideNavBar={false}
                  />

            </Scene>

            <Scene key = "thirdTab" 
                 navigationBarStyle={{backgroundColor : '#262E46',height: 80,paddingTop:20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.6, shadowRadius: 2}} 
                 titleStyle = {{color : 'white'}} 
                 title = "Redeem" 
                 icon = {TabIcon}>

                  <Scene
                    key = "redeem"
                    component = {RedeemScreen}
                    title = "VOUCHER REDEEM"
                    hideNavBar={false}
                  />

                  <Scene 
                    key = "productDetail"
                    component = {ProductDetail}
                    title = "DETAIL"
                    hideNavBar= {false}
                  />

            </Scene>


            <Scene key = "fourthTab" 
                 navigationBarStyle={{backgroundColor : '#262E46',height: 80,paddingTop:20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.6, shadowRadius: 2}} 
                 titleStyle = {{color : 'white'}} 
                 title = "User" 
                 icon = {TabIcon}>

                  <Scene
                    key = "user"
                    component = {UserScreen}
                    title = "USER"
                    hideNavBar={false}
                  />

                  <Scene 
                    key = "claimVoucher"
                    component = {ClaimVoucher}
                    title = "CLAMVOUCHER"
                    hideNavBar= {false}
                  />

            </Scene>

          </Scene>


        </Scene>
      </Router>
    
      </Provider>

    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  iconStyle : {
    paddingTop : 20,
    width : 27,
    height : 27,
  },
  iconStyleSelected : {
    paddingTop : 20,
    width : 27,
    height : 27,
    tintColor : '#F5318D'
  }
});

export default App