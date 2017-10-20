import React from 'react'

import { Modal, Text, TouchableHighlight, View } from 'react-native'
import { MapView } from 'expo'


export default class Map extends React.Component {
  
  state = {
    modalVisible: false,
    customPins : [
      {
        latitude : 13.786916,
        longitude : 100.572402,
        title : 'The Kris Condominium'
      },
      {
        latitude :  13.786783,
        longitude : 100.574638,
        title : 'Muang Thai Life Assurance'
      },
      {
        latitude : 13.652554,
        longitude : 100.491527,
        title : 'Thonburirom Park'
      }

    ]
  }

  _showModal(pin){
    this.setState({modalVisible : true})
    console.log(pin.latitude)
  }

  render() {

    //console.log(this.props.regionLocation)

    const { customPins } = this.state

    return (
      <MapView
        style={{ flex: 1 }}
        showsUserLocation = {true}
        region = {this.props.regionLocation}
      >

      { customPins.map((pin,index)=>{
             return  (
                <MapView.Marker key = {index}
                  coordinate = {{
                    latitude : pin.latitude,
                    longitude : pin.longitude
                  }}
                  title = { pin.title }
                  onPress = { () => this._showModal(pin) }
                  pinColor = 'FA8072'
                />
             );
                                
      })}

      </MapView>
    );
  }
}