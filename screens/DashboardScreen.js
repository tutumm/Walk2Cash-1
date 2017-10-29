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

const items = [
  {
    img: "https://ak.picdn.net/assets/cms/7c54565b19691d55cca97714b77aa2dae44ee264-shutterstock_83672455.jpg",
    point: '1000 P'
  },
  {
    img: "https://ak.picdn.net/assets/cms/6eca63d12211a357c80f89dbdfb0c362e8e4e27b-shutterstock_400690177.jpg",
    point: '1800 P'
  },
  {
    img: "https://thumb7.shutterstock.com/display_pic_with_logo/293665/371429575/stock-photo-art-beautiful-sunrise-over-the-tropical-beach-371429575.jpg",
    point: '20000 P'
  },
  {
    img: "https://www.shutterstock.com/panorama/wp-content/uploads/2015/05/shutterstock_206406082-copy.jpg",
    point: '1450 P'
  },
  {
    img: "https://thumb9.shutterstock.com/display_pic_with_logo/234100/111362132/stock-photo-view-on-eiffel-tower-paris-france-111362132.jpg",
    point: '1870 P'
  },
  {
    img: "https://i.vimeocdn.com/video/487267641_1280x720.jpg",
    point: '5630 P'
  }
]

import { getStepCount,getUserPoint } from '../action.js'


class DashboardScreen extends Component {

  state = {
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    currentStepCount: 0,
    score: 0,
    count: 0,
    modalVisible: false
  }

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
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
        currentStepCount: this.props.currentStep
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
      <TouchableHighlight onPress={() => this.handlePressAsync} style={styles.slide}>
          <Image style={{ width: 150, height: 150 }} source={{ uri: item.img }} />
      </TouchableHighlight>
    );
  }

  // _handlePressButtonAsync = async () => {
  //   console.log('Pressed')
  //   await WebBrowser.openBrowserAsync('https://expo.io');
  // };

  handlePressAsync = (text) => {
    console.log(text)
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

        <View style={{ alignItems: 'stretch', width: 300, marginTop: 20 }}>
          <View>
            <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold', textAlign: 'left' }}>EVENTS</Text>
          </View>
        </View>

        <View style={{ marginTop: 10, marginBottom: 30 }}>
          <CarouselEvents
            ref={(c) => { this._carousel = c; }}
            data={items}
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
    marginTop: 20,
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