
//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Text, Button} from 'react-native';
//import all the components we are going to use.

export default class SLPage extends Component {
  static navigationOptions = {
    title: 'SLPage',
    //headerShown:false,
    //Sets Header text of Status Bar
  };
  render() {
    const { navigate } = this.props.navigation;
    var p1 =this.props.navigation.state.params.p1;
    return (
      <View style={styles.container}>
        <Text>You are on SLPage</Text>
        <Text>username is {p1}</Text>
        <Button title='SAPage'
        onPress={() =>navigate('SAPage',{p1: p1})}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});