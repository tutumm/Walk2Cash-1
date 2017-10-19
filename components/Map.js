import React from 'react'
import { MapView } from 'expo'


export default class Map extends React.Component {
  
  render() {

    console.log(this.props.regionLocation)

    state = {
      modalVisible: false,
    }

    _showModal = () => {
       console.log("Show modal")
    }

    return (
      <MapView
        style={{ flex: 1 }}
        showsUserLocation = {true}
        region = {this.props.regionLocation}
      >

        
      
        <MapView.Marker
          coordinate = {{
            latitude : 13.786916,
            longitude : 100.572402
          }}
          pinColor = '#FA8072'
        />

        <MapView.Marker
          coordinate = {{
            latitude : 13.648101,
            longitude : 100.493964
          }}
          pinColor = '#FA8072'
        />

        <MapView.Marker
          coordinate = {{
            latitude : 13.652554,
            longitude : 100.491527
          }}
          title = 'Thonburirom Park'
          pinColor = '#FA8072'
          onPress = {this._showModal}
        >
          
          {/* onSelect = { this._showModal }            
          title = 'Thonburirom Park'
          pinColor = '#FA8072' */}
        
        </MapView.Marker>


      </MapView>
    );
  }
}