import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
  StatusBar
} from 'react-native';

import { Actions } from 'react-native-router-flux'
import { Constants, Location, Permissions } from 'expo';

import Map from '../components/Map.js'

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

class CheckinScreen extends Component {

    state = {
        location: { 
            coords: {
                latitude: 0, 
                longitude: 0
            }
        }
        // modalVisible: false,
    }

    // setModalVisible(visible) {
    //     this.setState({modalVisible: visible});
    // }

    componentWillMount() {
        Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
    }
    
    locationChanged = (location) => {
        region = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0009,
          longitudeDelta: 0.01,
        },
        this.setState({location, region})
    }

    render() {
        return (

                <Map 
                    regionLocation = {this.state.region}
                >

                </Map>
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
  
  export default CheckinScreen