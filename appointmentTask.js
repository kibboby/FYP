import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Switch, StackScreen } from 'react-native';
import DatePicker from 'react-native-datepicker';
import TimePicker from "react-native-24h-timepicker";
{/*import MapView from 'react-native-maps';
import Marker from 'react-native-maps'; */}

export default class appointmentTask extends React.Component {
    constructor(props){
    super(props)
    this.state = {date:"2016-05-15"}
    this.state = { time: ""}
  }

 
 
  onCancel() {
    this.TimePicker.close();
  }
 
  onConfirm(hour, minute) {
    this.setState({ time: `${hour}:${minute}` });
    this.TimePicker.close();
  }

    render(){
  return (
    <View>
      <View>
        <Text style={styles.Title}>Date:</Text>
        <DatePicker
        style={{width: 300}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
      </View>
      <View style={Timestyles.container}>
        <Text style={Timestyles.text}>Time: {this.state.time}</Text>
        <TouchableOpacity
          onPress={() => this.TimePicker.open()}
          style={Timestyles.button}
        >
          <Text style={Timestyles.buttonText}>TIME</Text>
        </TouchableOpacity>
        <TimePicker
          ref={ref => {
            this.TimePicker = ref;
          }}
          onCancel={() => this.onCancel()}
          onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
        />
      </View>

      <View style={containerStyle.rowContainer}>
        <Text style={styles.allDay}>All Day</Text>
        <Switch
          style={{marginTop: 31}}
        />
      </View>
      <View style={styles.container}>
        <Text>Location</Text>
        {/*<MapView
          style={styles.map}
          initialRegion={{
            latitude: 40.7030799,
            longitude: -74.0559131,
            latitudeDelta: 0,
            longitudeDelta: 0.05,
          }}>
          <MapView.Marker
            coordinate={{
              latitude: 40.7030799,
              longitude: -74.0559131,
            }}
            title="Demo"
            description="A location to test"
          />
          </MapView> */}
      </View>
      <View>
        <Text style={styles.allDay}>Notes</Text>
        <TextInput 
          style={styles.commentSection}
          placeholderTextColor = "black"
          placeholder='Comment Here'
          multiline = {true}
          numberOfLines = {4}/>
        <StatusBar style="auto" />
      </View>
      <View>
        <TouchableOpacity>
            <Text style = {buttonStyles.text}>
               Done
            </Text>
         </TouchableOpacity>
      </View>
    </View>
  );

    }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',

  },

  Title:{
    fontSize: 20,
    marginTop: 50,
    margin: 8,
  },

  allDay:{
    fontSize: 20,
    marginTop: 20,
    margin: 8,
  },

  commentSection:{
    backgroundColor: '#D3D3D3',
    padding: 10,
    margin: 10,
    width: 500,
  }
  
});

const containerStyle = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "#ffffff",
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems:'baseline'
  },
  colContainer:{
    flexDirection: 'column'
  }
});


const buttonStyles = StyleSheet.create ({
   text: {
      borderWidth: 1,
      padding: 15,
      margin: 10,
      borderRadius: 5,
      borderColor: 'black',
      backgroundColor: 'black',
      color:'white',
      textAlign: 'center'
   }
})

const Timestyles = StyleSheet.create({
  container:{
    margin: 10
  },

  text: {
    fontSize: 20,
    marginTop: 20,
    
  },
  button: {
    backgroundColor: "#D3D3D3",
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderRadius: 5,
    marginVertical: 10
  },
  buttonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600"
  },
});