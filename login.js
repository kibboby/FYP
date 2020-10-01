import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
//import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity} from 'react-native';


//export default function App() {
export default class Touchables extends Component {

 _onPressLoginButton() {
    alert('Wrong username/password')
  }

  _onPressForgotButton() {
    alert('You May Reset Your Password Here')
  }

   state={
    user:"",
    password:""
  }

    
 render() {
  return (
    <View style={styles.container}>

    <View style={styles.titleC}>
      <Text style={styles.title}>Sales Customer Management System</Text>
    </View>

    <View style={styles.usernameC}>
      <Text style={styles.username}>Username : </Text>
      <TextInput 
      style={styles.input}
      placeholder='User'
      onChangeText={text => this.setState({user:text})}
       />
    </View>

    <View style={styles.passwordC}>
      <Text style={styles.password}>Password : </Text>
      <TextInput 
      secureTextEntry={true} 
      style={styles.input}
      placeholder='Psw'
      onChangeText={text => this.setState({password:text})}
      />
    </View>

    <View>
     <TouchableOpacity
      onPress={this._onPressForgotButton}>
          <Text style={styles.forgot}>Forgot Password?</Text>
     </TouchableOpacity>
    </View>

    <View>
        <TouchableOpacity
            style={styles.LoginButton}
            onPress={this._onPressLoginButton}
            //disabled={!this.state.isFormValid}
            >
            <Text style={styles.Login}>LOGIN</Text>
     </TouchableOpacity>
     </View>

    



      <StatusBar style="auto" />
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleC: {
  padding:10,
  marginBottom:50,
  //backgroundColor: '#FF0000'
  },

  title: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: "bold",

  },

  input: {
    borderWidth: 2,
    //borderColor: '#FF0000',
    backgroundColor: '#D3D3D3',
    // borderColor: '#FF0000',
    borderTopColor: '#fff',
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    fontSize: 20,
    marginBottom:10,
    marginTop:5,
    width:200,
    alignSelf: 'flex-start',
  },

  forgot:{
    color:"blue",
    fontSize:11
  },

  LoginButton: {
    width: 200,
    marginTop: 20,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 50,
  },

  username: {
  fontSize: 20,
  },

  password:{
  fontSize: 20,
  },

  Login: {
    color: "white",
    fontSize: 20,
    fontWeight:'bold',
    justifyContent: "center",
    textAlign: "center",
  },




  
});
