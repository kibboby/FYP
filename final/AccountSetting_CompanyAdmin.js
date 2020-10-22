import { StatusBar } from 'expo-status-bar';
//import React from 'react';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//export default function App() {
export default class Touchables extends Component {


  _onprofilesettingButton() {
    alert(' Profile Setting')
  }

  _onnotificationButton() {
    alert('Notification')
  }

  _onchangepasswordButton() {
    alert('Change Password')
  }

  _onRequestButton() {
    alert('Request Account')
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            style={styles.AccButton}
            //onPress={this._onPressLoginButton}
            //disabled={!this.state.isFormValid}
            onPress={this._onprofilesettingButton}
          >
            <Text style={styles.buttoncontent}>PROFILE SETTING</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.AccButton}
            //onPress={this._onPressLoginButton}
            //disabled={!this.state.isFormValid}
            onPress={this._onnotificationButton}
          >
            <Text style={styles.buttoncontent}>NOTIFICATION</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.AccButton}
            //onPress={this._onPressLoginButton}
            //disabled={!this.state.isFormValid}
            onPress={this._onchangepasswordButton}
          >
            <Text style={styles.buttoncontent}>CHANGE PASSWORD</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.AccButton}
            //onPress={this._onPressLoginButton}
            //disabled={!this.state.isFormValid}
            onPress={this._onRequestButton}
          >
            <Text style={styles.buttoncontent}>REQUEST FOR ADDITIONAL ACCOUNT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "10%",
  },

  AccButton: {
    marginTop: 20,
    backgroundColor: "black",
    padding: 10,
    width: 300,
    borderRadius: 5,
  },

  buttoncontent: {
    color: "white",
    fontSize: 14,
    fontWeight: 'bold',
    justifyContent: "center",
    textAlign: "center",
  },
});
