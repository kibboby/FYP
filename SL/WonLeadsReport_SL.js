import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class ExampleTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LeadList: [
        { Leads: 'Facebook', CompanyName : 'Facebook Co', QuotationSent: 'RM100', QuotationAgreed: 'RM100' }
        , { Leads: 'Facebook', CompanyName : 'Facebook Co', QuotationSent: 'RM100', QuotationAgreed: 'RM100' }
      ],
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.firstCol}>Leads</Text>
          <Text style={styles.SecThirdCol}>Quotation Sent</Text>
          <Text style={styles.SecThirdCol}>Quotation Agreed</Text>
        </View>
        <FlatList
          data={this.state.LeadList}
          renderItem={({ item }) =>
            <View style={styles.cardView}>
              <Text style={styles.firstCol} onPress={() => this.props.navigation.navigate('Lead Detail')}>{item.Leads}   ({item.CompanyName})</Text>
              <Text style={styles.SecThirdCol} onPress={() => this.props.navigation.navigate('Lead Detail')}>{item.QuotationSent}</Text>
              <Text style={styles.SecThirdCol} onPress={() => this.props.navigation.navigate('Lead Detail')}>{item.QuotationAgreed}</Text>
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
    padding: "10%",
    backgroundColor: '#fff',
    marginTop:10
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
  header:{
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    textAlign: 'center',
    fontSize : 16,
    backgroundColor: 'lightgrey'
  },
  SecThirdCol: {
    fontSize: 12,
    width: '35%',
    borderLeftColor: 'black',
    borderLeftWidth: 1,
    padding: 5,
    textAlign: 'left',
    paddingLeft: 15
  },
  firstCol:{
    fontSize: 12,
    width: '40%',
    padding: 5,
    textAlign: 'left',
    paddingLeft: 15
  }
});