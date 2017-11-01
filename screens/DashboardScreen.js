import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  Image,
  ScrollView,
  WebView,
  Modal,
  TouchableHighlight,
  Button
} from 'react-native';

import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { Font, Pedometer, WebBrowser } from 'expo'
import Pie from 'react-native-pie'
import { Col, Row, Grid } from "react-native-easy-grid"
import CarouselEvents from 'react-native-snap-carousel'

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 200;

import { getStepCount,getUserPoint } from '../action.js'


class DashboardScreen extends Component {

  state = {
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    currentStepCount: 0,
    score: 0,
    count: 0,
    modalVisible: false,
    items: [],
    companion: 0,
  }

  componentDidMount() {
    this._subscribe()

    fetch('https://fb69ac76.ngrok.io/events')
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        items: data
      })
    })
    .catch((error) => {
      console.error(error)
    });
  }

  componentWillUnmount() {
    this._unsubscribe()
  }

  _subscribe = () => {

    const { dispatch } = this.props
    
    this._subscription = Pedometer.watchStepCount(result => {
      dispatch(getStepCount(result.steps))
      dispatch(getUserPoint(Math.floor(result.steps/10)))
      const currentScore = this.props.totalPoint
      const score = Math.floor(result.steps / 10)

      this.setState({
        score : currentScore,       
        // currentStepCount: this.props.currentStep
        currentStepCount : result.steps
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result)
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
      },
      error => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error
        });
      }
    );
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  handleChange() {
    console.log("change")
  }

  _renderItem({ item, index }) {
    return (
      <TouchableHighlight style={styles.slide} onPress={ () => WebBrowser.openBrowserAsync(item.eventUrl) }>
          <Image style={{ width: 150, height: 150 }} source={{ uri: item.imgUrl }} />
      </TouchableHighlight>
    );
  }

  togglePress = () => {
    if (this.state.companion==0)
      this.setState({
        companion: 1
      })
    else if (this.state.companion==1)
      this.setState({
      companion: 0
    })
  }

  toggleCompanion = () => {
    if(this.state.companion==0){
      return (
        <View style={styles.card2}>
          <Text style={styles.todayText}>TODAY</Text>
          <View>
            <Pie
              radius={100}
              innerRadius={86}
              series={[this.state.currentStepCount * 100 / 8000]}
              colors={['#F5318D']}
              backgroundColor='#364060'
            />
            <View style={styles.gauge}>
              <Text style={styles.gaugeGoal}>Goal: 8000</Text>
              <Text style={styles.gaugeText}>{this.state.currentStepCount} steps</Text>
            </View>
          </View>
          <Grid style={{ marginTop: 10 }}>
            <Col><Text style={styles.statHead}>Hi1</Text></Col>
            <Col><Text style={styles.statHead}>Hi2</Text></Col>
          </Grid>
        </View>
      );
    } else if(this.state.companion==1){
      return (
        <View style={{flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#262d47',
            shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.6, shadowRadius: 10,
            width: 300,
            height: 330,
          }}>
          <Text style={styles.todayText}>สวัสดี {this.props.username}</Text>
          <Text style={{width: '75%', color: 'white', textAlign: 'center'}}>หากคุณเดินเร็วในระดับที่หัวใจเพิ่มอัตราการเต้นได้ 10,000 ก้าวต่อวัน หรือ 3 วันต่อสัปดาห์ จะช่วยในเรื่องของความดันโลหิตได้เป็นอย่างดีเลยล่ะ</Text>
          <Text style={{color: 'grey', fontSize: 13, opacity: 0.6, paddingTop: 30}}>Sponsored By sponsor</Text>
        </View>
      );
    }
  }

  render() {
    
    const { dispatch } = this.props

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <View style={styles.card1}>
          <Text style={styles.myPointTextstyle}>MY POINTS: <Text style={styles.scoreTextStyle}>{this.props.totalPoint}</Text></Text>
        </View>


        <TouchableHighlight activeOpacity={100} onPress={this.togglePress} style={{marginTop: 20}}> 
          {this.toggleCompanion()}
        </TouchableHighlight>

        <View style={{ alignItems: 'stretch', width: 300, marginTop: 20 }}>
          <View>
            <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold', textAlign: 'left' }}>EVENTS</Text>
          </View>
        </View>


        <View style={{ marginTop: 10, marginBottom: 30 }}>
          <CarouselEvents
            ref={(c) => { this._carousel = c; }}
            data={this.state.items}
            renderItem={this._renderItem}
            sliderWidth={BannerWidth}
            itemWidth={150}
          />
        </View>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  card1: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262d47',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.6, shadowRadius: 10,
    width: 300,
    height: 80,
    marginTop: 20,
  },
  card2: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#262d47',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.6, shadowRadius: 10,
    width: 300,
    height: 330,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#171C2F',
  },
  myPointTextstyle: {
    fontSize: 20,
    margin: 10,
    color: 'white'
  },
  scoreTextStyle: {
    fontSize: 30,
    color: '#F72582',
    textAlign: 'center',
    fontWeight: 'bold',
    shadowColor: '#F72582',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    paddingLeft: 70
  },
  todayText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: 'transparent',
    marginBottom: 20,
    marginTop: 20
  },
  gauge: {
    position: 'absolute',
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  gaugeGoal: {
    color: '#364069',
    fontWeight: 'bold',
    marginBottom: 5
  },
  statHead: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  },
  slide: {
    height: 150,
    width: 150,
    backgroundColor: 'transparent'
  },
});


const mapStateToProps = (state) => state

export default connect(mapStateToProps)(DashboardScreen)