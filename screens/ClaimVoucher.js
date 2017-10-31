import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { Col, Row, Grid } from "react-native-easy-grid"
import { redeemVoucher } from '../action.js'

class ProductDetail extends Component {
  productDetail = this.props.productDetail

  state = {
    claimedVoucher : false
  }

  showQR = () => (
    <View style={{width: '75%', alignItems: 'center'}}>
    <Text style={styles.productQR}>QR Code</Text>
    <Image
      style={{ width: 250, height: 250, marginTop: 10 }}
      source={(require('../images/qr.png'))}
    />
    <Text style={styles.productQR}>Generated Code</Text>
    <View style={{backgroundColor: '#0C0F19', height: 100, width: 250, marginBottom: 20, alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
      <Text style={{color: 'white', fontSize: 35}}>JQD435FHEK</Text>
    </View>
  </View>
  )

  _claim(productDetail){
     const { dispatch } = this.props
     this.setState({
        claimedVoucher : true
     })
     dispatch(redeemVoucher(this.productDetail))
  }

  
  render() {

    const { dispatch } = this.props

    return (

      <ScrollView contentContainerStyle={!this.state.claimedVoucher ? styles.container : styles.containerQR}>
        <View style={{ height: 230, marginTop: 30, alignItems: 'flex-start' }}>
          <Grid>
            <Col style={{ alignItems: 'center' }}>
              <Image style={{ width: 150, height: 150 }} source={{ uri: this.productDetail.img }} />
            </Col>
            <Col>
              <Text style={styles.productBrand}>
                {this.productDetail.brand}
              </Text>
              <Text style={styles.productName}>
                {this.productDetail.name}
              </Text>
              <Text style={styles.productCategory}>
                {this.productDetail.category}
              </Text>
              <Text style={styles.productRating}>
                Ratings(4.5)
              </Text>
              <Image
                style={{ width: 124, height: 17, marginLeft: -10, marginTop: 10 }}
                source={(require('../images/stars/4.5.png'))}
              />
              
            </Col>
          </Grid>
          <Grid style={{ marginTop: 100 }}>
            <Col>
              <Text style={{ marginTop: 13, alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
                <Text style={styles.productPoint}>{this.productDetail.point}</Text>
                <Image
                  style={{ width: 17, height: 17, marginLeft: 5 }}
                  source={require('../images/Point.png')}
                />
              </Text>
            </Col>
            <Col>
              <View style={styles.claimedButton}>
                <Text 
                  style={{ textAlign: 'center', backgroundColor: 'transparent', fontSize: 18, color: 'white', marginTop: 3 }}
                >
                  Claimed
                </Text>
              </View>
            </Col>
          </Grid>
        </View>

        <View style={styles.detail}>
          <Text style={styles.productDetailHead}>รายละเอียด </Text>
          <Text style={styles.productDetail}>{this.productDetail.detail}</Text>
        </View>

        {this.showQR()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#171C2F',
  },
  productImg: {
    alignItems: 'center'
  },
  productName: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    marginRight: 10
  },
  productBrand: {
    fontSize: 17,
    color: 'white',
  },
  productCategory: {
    paddingTop: 10,
    fontSize: 17,
    color: '#F72582',
    opacity: 0.8
  },
  productRating: {
    fontSize: 17,
    color: 'white',
    marginTop: 10
  },
  productPoint: {
    fontSize: 17,
    color: '#F72582',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  },
  detail: {
    width: '75%',
  },
  productDetail: {
    color: 'white',
    fontSize: 15,
    opacity: 0.9
  },
  productDetailHead: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 15
  },
  claimedButton: {
    height: 35,
    width: '80%',
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: '#f0cedc',
    borderColor: '#f0cedc'
  },
  productQR: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 20,
    marginTop: 20,
    alignItems: 'flex-start'
  }

});


const mapStateToProps = (state) => state

export default connect(mapStateToProps)(ProductDetail)
