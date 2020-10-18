import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { FlatList, TouchableNativeFeedback } from 'react-native-gesture-handler';

export default class ExampleTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LeadList: [
        { Leads: 'Facebook', Contacted: 'Yes', QuoteSent: 'Yes (RM1000)', Status: 'Won' }
        , { Leads: 'Facebook', Contacted: 'Yes', QuoteSent: ' - ', Status: 'Lost' }
      ],
    }
  }

  getLeadsData = (item) => {
    //var RollNo = item.RollNo;
    //var StudentName = item.StudentName;
    //var Course = item.Course;

    //alert(RollNo + "\n" + StudentName + "\n" + Course);
  }

  getRemarks = (item) => {
    //var RollNo = item.RollNo;
    //var StudentName = item.StudentName;
    //var Course = item.Course;

    //alert(RollNo + "\n" + StudentName + "\n" + Course);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.firstCol}>Leads</Text>
          <Text style={styles.SecCol}>Contacted</Text>
          <Text style={styles.SecCol}>Quote Sent</Text>
          <Text style={styles.SecCol}>Won / Lost</Text>
        </View>
        <FlatList
          data={this.state.LeadList}
          renderItem={({ item }) =>
            <View style={styles.cardView} onPress={() => this.getLeadsData(item)}>
              <Text style={styles.firstCol}>{item.Leads}</Text>
              <Text style={styles.SecCol}>{item.Contacted}</Text>
              <Text style={styles.SecCol}>{item.QuoteSent}</Text>
              <Text style={styles.SecCol} onPress={() => this.getRemarks(item)}>{item.Status}</Text>
            </View>
          }
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 16,
    padding:"10%",
    //paddingTop: 30,
    backgroundColor: '#fff',
    marginTop: 10
  },
  cardView: {
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    borderTopWidth: 0,
    textAlign: 'center'
  },
  header: {
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 16,
    backgroundColor: 'lightgrey'
  },
  SecCol: {
    fontSize: 12,
    width: "24%",
    borderLeftColor: 'black',
    borderLeftWidth: 1,
    padding: 5,
    textAlign: 'left',
    paddingLeft: 15
  },
  firstCol: {
    fontSize: 12,
    width: '30%',
    padding: 5,
    textAlign: 'left',
    paddingLeft: 15
  }
});