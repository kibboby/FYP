import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';


//export default function App() {
export default class Touchables extends Component {

_onPressSubmitButton() {
    alert('Nothing to Submit')
  }

state={
remarksDescription:'',
leadsid:'1',
placeholder:'NO remarks to be view',
x:'o',
};
   
render(){
const url = 'http://localhost:80/BAckend/retrieveRemarksWC.php';
        fetch( url,
            {
                method: 'POST',
                headers:
                {
                   'Origin': '*',
                   'Accept': 'application/json',
                   'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        leadsid: this.state.leadsid,
 
                    })

            }).then((response) => response.json()).then((responseJsonFromServer) => {

            if (responseJsonFromServer=="")
            {
            responseJsonFromServer="NO remarks to be view";
            this.setState({placeholder:responseJsonFromServer});
            }

            else
            {
           //this.state.placeholder=responseJsonFromServer;
            this.setState({placeholder:responseJsonFromServer});
            //alert(this.state.placeholder)
            }

            }).catch((error) => {
                console.log(error);
            });
  return (
    <View style={styles.container}>
        <View  style={styles.RemarksC}>
            <Text style={styles.Remarks}>Remarks</Text>
            <TextInput 
            style={styles.inputR}
            placeholder={this.state.placeholder}
            multiline={true}
            editable={false}
            //autoFocus={true}

            />
         </View>
        

      
        
        
        
        <StatusBar style="auto" />
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'Left',
    padding:"10%"
    //justifyContent: 'center',
  },

  RemarksC:{
  //margintop:50,
  backgroundColor:"white",
  },

  Remarks:{
  //marginTop:"10%",
  color:"black",
  fontWeight:"bold",
  //fontSize:14,
  },

  inputR:{
  marginTop:10,
  padding:10,
  //borderWidth:2,
  //borderColor:'gray'
  backgroundColor:'lightgrey',
  height:200,
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5,
  },

  SubmitButtonR:{
  marginTop: 20,
  backgroundColor: "black",
  padding: 10,
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5,
  },

  SubmitR:{
  color:"white",
  fontSize:20,
  fontWeight:'bold',
  justifyContent: "center",
  textAlign: "center",
  },

});