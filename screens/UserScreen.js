import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

import { Actions } from 'react-native-router-flux'
import { VictoryBar } from "victory-native";



const data = [[
  [0, 1],
  [1, 3],
  [3, 7],
  [4, 9],
]];

class UserScreen extends Component {



    render() {
        
        return (
            <View style = {styles.container}>
                 <Image
                 style={{width: 100, height: 100, borderRadius: 50,marginTop: 30}}
                 source={{uri: 'https://www.tkgourmet.com/v/vspfiles/photos/3-salmonnorway-2.jpg'}}
               /> 
               <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold',margin:15}}>Salmon Norway</Text>
               
               <View style={{flexDirection:'row', flexWrap:'wrap'}}>
               <Button style={styles.buttontab}
               /* onPress={onPressLearnMore} */
               title="Day"
               accessibilityLabel="day"
             />
             <Button style={styles.buttontab}
               /* onPress={onPressLearnMore} */
               title="Month"
               accessibilityLabel="month"
             />
             <Button style={styles.buttontab}
               /* onPress={onPressLearnMore} */
               title="Year"
               accessibilityLabel="year"
             />
               </View>

             
            <VictoryBar />
    

            </View>
        );

    }

}

const styles = StyleSheet.create({
    buttontab: {
        color :"#F5318D"
    },
    chart: {
		width: 200,
		height: 200,
	},
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#171C2F',
    }
  });
  
  export default UserScreen