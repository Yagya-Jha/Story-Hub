import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class ReadScreen extends React.Component {
  render(){
    return(
      <View style = {styles.container}>
         <Text style = {{textAlign:"center", backgroundColor:"pink",width:400,marginTop:-12,alignSelf:"center", fontSize:50, fontWeight:"bold",}}>Story Hub</Text>
        <Image source = {require("../assets/read.png")} style = {{width:200, height:200, alignSelf:"center"}}/>
        <View>
          <Text style = {styles.text}>You can read stories published by other authors here</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    padding: 8,
    alignItems: "center"
  },
  text: {
    fontSize:25,
    alignSelf:"center",
    justifyContent:"center",
    alignItems:"center",
    fontWeight:"bold",
    color:"black",
  },
});
