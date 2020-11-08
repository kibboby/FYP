import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';

export default class App extends Component {

  _onPressCancel() {
    alert('Cancel')
  }

  _onPressSave() {
       const url = 'http://localhost:80/BAckend/profilesettingsaveWC.php';
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
                        CAusername: this.state.CAusername,
                        username:this.state.username,
                        companyName:this.state.companyName,
                        address:this.state.address,
                        email:this.state.email,
                        contact:this.state.contact,
                    })

            }).then((response) => response.json()).then((responseJsonFromServer) => {

             alert(responseJsonFromServer)



            }).catch((error) => {
                console.log(error);
            });
  }


  state = {
    CAusername:'Aliah',
    username: '',
    companyName: '',
    address: '',
    email: '',
    contact: '',
    placeholderusername:'',
    placeholdercompanyName:'',
    placeholderaddress:'',
    placeholderemail:'',
    placeholdercontact:'',
  };

  componentWillMount(){
        const url = 'http://localhost:80/BAckend/profilesettingWC.php';
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
                        CAusername: this.state.CAusername,
 
                    })

            }).then((response) => response.json()).then((responseJsonFromServer) => {

             this.setState({placeholderusername:responseJsonFromServer[0]});
             this.setState({placeholdercompanyName:responseJsonFromServer[3]});
             this.setState({placeholderaddress:responseJsonFromServer[6]});
             this.setState({placeholderemail:responseJsonFromServer[4]});
             this.setState({placeholdercontact:responseJsonFromServer[5]});


            
            //alert(responseJsonFromServer[0])


            }).catch((error) => {
                console.log(error);
            });
  };

  
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.instruction}>Username</Text>
          <Text >{"current: "+this.state.placeholderusername }</Text>
          <TextInput
            //secureTextEntry={true} 
            style={styles.input}
            //placeholder={this.state.placeholderusername}
            placeholder={"--Dont leave blank upon saving--"}
            onChangeText={text => this.setState({ username: text })}
          />

          <Text style={styles.instruction}>Company Name</Text>
          <Text >{"current: "+this.state.placeholdercompanyName }</Text>
          <TextInput
            //secureTextEntry={true} 
            style={styles.input}
            //placeholder={this.state.placeholdercompanyName}
            placeholder={"--Dont leave blank upon saving--"}
            onChangeText={text => this.setState({ companyName: text })}
          />

          <Text style={styles.instruction}>Address</Text>
          <Text >{"current: "+this.state.placeholderaddress }</Text>
          <TextInput
            //secureTextEntry={true} 
            style={styles.AddressInput}
           //placeholder={this.state.placeholderaddress}
           placeholder={"--Dont leave blank upon saving--"}
            onChangeText={text => this.setState({ address: text })}
          />

          <Text style={styles.instruction}>Email</Text>
          <Text >{"current: "+this.state.placeholderemail }</Text>
          <TextInput
            //secureTextEntry={true} 
            style={styles.input}
            //placeholder={this.state.placeholderemail}
            placeholder={"--Dont leave blank upon saving--"}
            onChangeText={text => this.setState({ email: text })}
          />

          <Text style={styles.instruction}>Contact</Text>
          <Text >{"current: "+this.state.placeholdercontact }</Text>
          <TextInput
            //secureTextEntry={true} 
            style={styles.input}
            //placeholder={this.state.placeholdercontact}
            placeholder={"--Dont leave blank upon saving--"}
            onChangeText={text => this.setState({ contact: text })}
          />


          <View style={styles.row}>
            <TouchableOpacity
              style={styles.Button}
              //onPress={this._onPressLoginButton}
              //disabled={!this.state.isFormValid}
              onPress={()=>this._onPressCancel()} 
            >
              <Text style={styles.ButtonContent}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Button}
              //onPress={this._onPressLoginButton}
              //disabled={!this.state.isFormValid}
               //onPress={()=>alert("Save")} 
               onPress={()=>this._onPressSave()}
            >
              <Text style={styles.ButtonContent}>Save</Text>
            </TouchableOpacity>
          </View>

          <Text >{this.state.username }</Text>
          <Text >{this.state.companyName }</Text>
          <Text >{this.state.address}</Text>
          <Text >{this.state.email }</Text>
          <Text >{this.state.contact}</Text>

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
    borderRadius: 5,
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
    borderRadius: 5,
  },

  ButtonContent: {
    textAlign: 'center',
    color: "white",
    fontWeight: 'bold',
  },
  AddressInput: {
    height: 100,
    backgroundColor: "lightgrey",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  }

});
