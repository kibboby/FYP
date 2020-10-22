import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ListofEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      EmployeeList: [
        { Image: '', SalespersonName: 'John David', Designation: 'Salesperson' }
        , { Image: '', SalespersonName: 'John David', Designation: 'Salesperson' }
      ]
    }
  }

  //to be further implemented by onPress function to go to lead's detail page
  getEmployeeData = (item) => {
    //var RollNo = item.RollNo;
    //var StudentName = item.StudentName;
    //var Course = item.Course;

    //alert(RollNo + "\n" + StudentName + "\n" + Course);
  }

  render() {
    return (
      <View style={{ flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#fff',
        marginTop: 10}}>
        <ScrollView>
          <FlatList
            data={this.state.EmployeeList}
            renderItem={({ item }) =>

              <Card style={styles.card} onPress={() => this.getEmployeeData(item)}>
                <View style={styles.cardView}>
                  <Icon
                    name='user'
                    size={35}
                    style={styles.profileImg} />
                  <View style={styles.texts}>
                    <Text style={styles.Name}>{item.SalespersonName}</Text>
                    <Text style={styles.Designation}>{item.Designation}</Text>
                  </View>
                </View>
              </Card>
            }
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  displayContainer: {
    flexDirection: 'row',
  },
  nav: {
    margin: 5,
    backgroundColor: 'lightgrey',
    padding: 5,
    textAlign: 'center',
    borderRadius: 5
  },
  navTitle: {
    fontSize: 16
  },
  cardActive: {
    margin: 5,
    backgroundColor: 'black',
    padding: 5,
    width: '20%',
    textAlign: 'center',
    borderRadius: 5
  },
  activeTitle: {
    color: 'white',
    fontSize: 16
  },
  profileImg: {
    borderRadius: 50,
    height: 40,
    width: 40,
    overflow: 'hidden',
    borderColor: 'black',
    borderWidth: 1,
    paddingStart: 6
  },
  card: {
    margin: 5,
    backgroundColor: 'lightgrey',
    borderRadius: 10
  },
  cardView: {
    flexDirection: 'row',
    padding: 10,
    marginLeft: 10
  },
  texts: {
    marginLeft: 10
  },
  Name: {
    fontSize: 16
  },
  Designation: {
    fontSize: 12
  }
})