import React from 'react'

import { Modal, Text, TouchableHighlight, View,StyleSheet } from 'react-native'
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
    ],
    pinSelected : {
      
    }
  }

  _showModal(pin){
    this.setState({
      visibleModal : true,
      pinSelected : pin
    })

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
                    onPress = { () => { this._showModal(pin) } }
                    pinColor = 'FA8072'
                  />
              );               
        })}

        <View style = {{marginTop : 50}}>
            <Modal 
              visible={this.state.visibleModal}
              transparent={true}
              animationType = "slide"
              style = {styles.containerStyle}
            >

          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center'}}>
              
              <View style={styles.modalContainer}>

                <Text style = {styles.modalTitle}>{this.state.pinSelected.title}</Text>

                <Text style = {{color : 'white'}} onPress = {()=> {this.setState({visibleModal: false})}}>Close</Text>

              </View>

          </View>

          </Modal>
        </View>

      </MapView>

    );
  }
}

const styles = StyleSheet.create({

  modalContainer : {
    alignSelf: 'stretch',
    height: 350,
    backgroundColor:'rgb(0,0,0)', 
    opacity:.60
  },
  modalTitle : {
    padding : 10,
    fontSize: 30,    
    color : '#F5318D'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    width : 100,
    margin : 0,
  },
});

