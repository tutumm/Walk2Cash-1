import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import { Actions } from 'react-native-router-flux'
import { Font } from 'expo';
import Pie from 'react-native-pie'
import { Col, Row, Grid } from "react-native-easy-grid";

class DashboardScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <View style={styles.card1}>
          <Text style={styles.textstyle}>MY POINTS: 100000</Text>
        </View>

        <View style={styles.card2}>
          <Text style={styles.todayText}>TODAY</Text>
          <View>
            <Pie
              radius={100}
              innerRadius={86}
              series={[80]}
              colors={['#F5318D']}
              backgroundColor='#364060'
            />
            <View style={styles.gauge}>
              <Text style={styles.gaugeGoal}>Goal: 8000</Text>
              <Text style={styles.gaugeText}>5024 steps</Text>
            </View>
          </View>
          <Grid style={{marginTop: 10}}>
            <Col><Text style={styles.statHead}>Hi1</Text></Col>
            <Col><Text style={styles.statHead}>Hi2</Text></Col>
          </Grid>
        </View>
      </View>
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
    width: 250,
    height: 80,
    margin: 10,
  },
  card2: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#262d47',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.6, shadowRadius: 10,
    width: 250,
    height: 330,
    margin: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#171C2F',
  },
  textstyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F5318D'
  },
  todayText: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginBottom: 20,
    marginTop: 20,
    shadowColor: 'white', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 5,
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
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    shadowColor: 'white', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 5,
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
    shadowColor: 'white', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.3, shadowRadius: 5,
    backgroundColor: 'transparent'
  }
});

export default DashboardScreen