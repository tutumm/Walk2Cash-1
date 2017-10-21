import React from 'react'

import { Text, TouchableHighlight, View,StyleSheet } from 'react-native'
import { MapView } from 'expo'

import Modal from 'react-native-modalbox'
import Slider from 'react-native-slider'
// import Modal from 'react-native-modal'

export default class Map extends React.Component {

  state = {
    visibleModal: false,
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
      
    },
    indexSelect : 0,
    isOpen: false,
    isDisabled: false,
    swipeToClose: true
  }

  _showModal(pin,index){

    this.refs.mapModal.open()
    this.setState({
      pinSelected : pin,
      indexSelected : index
    })
  }


  handleClaim(index){
    const { customPins } = this.state
    const i = index.index 
    customPins.splice(i,1)
    this.setState({
      pinSelected : { },
      customPins : customPins,
    })

    this.refs.mapModal.close()
    
  }

  render() {

    //console.log(this.props.regionLocation)

    const { customPins,pinSelected,isDisabled } = this.state

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
                    onPress = { () => { this._showModal(pin,{index}) } }
                    pinColor = 'FA8072'
                  />
              );               
        })}

        <Modal style={[styles.modal, styles.modalMap]} position={"bottom"} ref = {"mapModal"}>
            <Text style={styles.text}>{pinSelected.title}</Text>
            <Text style = {styles.btn} onPress = {() => { this.handleClaim(this.state.indexSelected) } }>Claim</Text>
        </Modal>

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
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modalMap : {
    height: 300,
    backgroundColor:'rgb(44,48,63)', 
    opacity:.60    
  },

  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },

  text: {
    color: "white",
    fontSize: 22
  }
});