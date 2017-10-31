import React from 'react'

import {
  Text, 
  Image,
  TouchableHighlight, 
  View,
  StyleSheet 
} from 'react-native'

import { MapView } from 'expo'
import { connect } from 'react-redux'
import Modal from 'react-native-modalbox'
import { Col, Row, Grid } from "react-native-easy-grid"

import { getBonusPoint } from '../action.js'

class Map extends React.Component {

  state = {
    visibleModal: false,
    customPins : [],
    pinSelected : {
      
    },
    indexSelect : 0,
    isOpen: false,
    isDisabled: false,
    swipeToClose: true
  }

  componentDidMount(){

    fetch('https://fb69ac76.ngrok.io/maps')
     .then((response) => response.json())
     .then((responseJson) => {
        this.setState({customPins: responseJson})
        return responseJson
     })
     .catch((error) => {
       console.error(error);
     });

  }


  _showModal(pin,index){

    this.refs.mapModal.open()
    this.setState({
      pinSelected : pin,
      indexSelected : index
    })
  }


  handleClaim(index){

    const { dispatch } = this.props
    dispatch(getBonusPoint(this.state.pinSelected.point))  // dispatch( getBonusPoint(pinSelected.point) )
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



    const { customPins,pinSelected,isDisabled } = this.state

    return (
      <MapView
        style={{ flex: 1 }}
        showsUserLocation = {true}
        loadingEnabled = {true}
        loadingIndicatorColor = {'#CD5294'}
        region = {this.props.regionLocation}
      >

        { customPins.map((pin,index)=>{
              return  (
                  <MapView.Marker key = {index}
                    coordinate = {{
                      latitude : pin.latitude,
                      longitude : pin.longitude
                    }}
                    onPress = { () => { this._showModal(pin,{index}) } }
                  >

                    <Image 
                      source={require('../assets/images/bubble.png')} 
                      style = {styles.mapMarker}
                    >
                        <View style = {styles.textPinpoint}>
                          <Text style = {styles.textPinStyle}> 
                              {pin.point}P
                          </Text>
                        </View>
                    </Image>

                  </MapView.Marker>
              );               
        })}
        
        <Modal style={[styles.modal, styles.modalMap]} position={"bottom"} ref = {"mapModal"}>

          <View style = {{flex : 1}} >
            <Image source={require('../assets/images/minus64.png')} style={styles.minusStyle} /> 
          </View>

          <View style={{flex: 3,alignSelf : 'stretch'}}>    
              <Grid>  
                  <Col size = {2}>
                    <View style = {{paddingLeft : 30,paddingTop : 15}}> 
                      <Text style={styles.textTitle}>{pinSelected.title}</Text>  
                    </View>

                    <View style = {{marginTop : 20,paddingLeft : 30}}> 
                      <Text style={{color : '#EEC449'}}>
                          <Text style = {{fontSize : 30}}> ⋆⋆⋆⋆ </Text> Rating(4.5)
                      </Text>  

                    </View>

                  </Col>

                  <Col size = {1} style = {{justifyContent: 'center',alignItems: 'center'}}>
                      <Text style = {styles.pointModal}>{pinSelected.point}P</Text>
                  </Col>
              </Grid>

          </View>

        
          <View style={{flex: 2}}>  
            <Text style = {{color : 'white'}}>{pinSelected.address}</Text>
          </View>

          <View style={{flex: 2}}>  
            <Text 
               style={styles.claimButton}
               onPress = {() => { this.handleClaim(this.state.indexSelected) } }
            >
              Claim
            </Text>

          </View>
             

        </Modal>

      </MapView>

    );
  }
}

const styles = StyleSheet.create({

  mapMarker : {
    width : 50,
    height : 50,

  },
  textPinpoint : {
    paddingTop : 12,
    justifyContent : 'center',
    alignSelf : 'center',
    alignItems : 'center'
  },
  textPinStyle : {
    color : '#FFFFFF', 
    fontWeight: 'bold',
    shadowColor: '#F72582',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 3
  },
  minusStyle : {
    width : 50,
    height : 50
  },
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
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  modalMap : {
    height: 300,
    backgroundColor:'rgb(44,48,63)', 
    opacity:.8    
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
  textTitle: {
    fontWeight: 'bold',
    color: "white",
    fontSize: 18
  },
  pointModal : {
    fontSize : 60,
    color : '#EEC449',
    shadowColor: 'white', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.3, shadowRadius: 5,
    backgroundColor: 'transparent'    
  },
  claimButton: {
    backgroundColor : '#F5318D',
    fontSize: 20,
    marginTop: 10,
    paddingTop: 3,
    height: 35,
    width: 250,
    borderRadius:50,
    borderWidth: 1,
    borderColor: '#F5318D',
    color: 'white',
    textAlign: 'center'
  },

});

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Map)