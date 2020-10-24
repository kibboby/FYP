import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';

import ImagePicker from '../imagePicker.js'
export default class App extends Component {

  _onPressCancel() {
    alert('Cancel')
  }

  _onPressSave() {
    alert('Save')
  }

  state = {
    username: '',
    designation: '',
    name: '',
    email: '',
    contact: '',
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <ImagePicker style={styles.imagepicker} />
          </View>
          <Text style={styles.instruction}>Username</Text>
          <TextInput
            //secureTextEntry={true} 
            style={styles.input}
            onChangeText={text => this.setState({ username: text })}
          />

          <Text style={styles.instruction}>Designation</Text>
          <TextInput
            //secureTextEntry={true} 
            style={styles.input}
            onChangeText={text => this.setState({ designation: text })}
          />

          <Text style={styles.instruction}>Name</Text>
          <TextInput
            //secureTextEntry={true} 
            style={styles.input}
            onChangeText={text => this.setState({ name: text })}
          />

          <Text style={styles.instruction}>Email</Text>
          <TextInput
            //secureTextEntry={true} 
            style={styles.input}
            onChangeText={text => this.setState({ email: text })}
          />

          <Text style={styles.instruction}>Contact</Text>
          <TextInput
            //secureTextEntry={true} 
            style={styles.input}
            onChangeText={text => this.setState({ contact: text })}
          />


          <View style={styles.row}>
            <TouchableOpacity
              style={styles.Button}
              //onPress={this._onPressLoginButton}
              //disabled={!this.state.isFormValid}
              onPress={()=> this.props.navigation.goBack()} 
            >
              <Text style={styles.ButtonContent}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Button}
              //onPress={this._onPressLoginButton}
              //disabled={!this.state.isFormValid}
              onPress={()=> this.props.navigation.goBack()} 
            >
              <Text style={styles.ButtonContent}>Save</Text>
            </TouchableOpacity>


          </View>

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: "10%",
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  instruction: {
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },

  input: {
    backgroundColor: "lightgrey",
    //width:'100%',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: 'space-around',
  },

  Button: {
    backgroundColor: "black",
    padding: 10,
    width: 130,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },

  ButtonContent: {
    textAlign: 'center',
    color: "white",
    fontWeight: 'bold',
  },

});
