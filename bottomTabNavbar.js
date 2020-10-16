import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import DashBoardSales from './pages/dshboard_SalePrsn.js';
import History from "./pages/history(Alluser).js";
import Report from "./pages/reportButton_Salesperson.js";
import Profile from './pages/account_SalePrsn'


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        activeTintColor: '#000000',
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashBoardSales}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Report"
        component={Report}
        options={{
          tabBarLabel: 'Report',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chart-bar-stacked" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Profile}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} style={{transform: [{rotateY: '180deg'}]}} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}


// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
// import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

// export default class ExampleTwo extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             LeadList: [
//                 { Leads: 'Facebook', QuotationSent: 'RM100', QuotationAgreed: 'RM100' }
//                 , { Leads: 'Facebook', QuotationSent: 'RM100', QuotationAgreed: 'RM100' }
//             ],
//             tableHead: ['Leads', 'Quotation Sent', 'Quotation Agreed'],
//             tableData: [
//                 ['1', '2', '1'],
//                 ['a', 'b', '1'],
//                 ['1', '2', '1'],
//                 ['a', 'b', '1']
//             ]
//         }
//     }

//     render() {
//         const state = this.state;
//         return (
//             <View style={styles.container}>
//                 <Table borderStyle={{ borderWidth: 1 }}>
//                     <Row data={state.tableHead} flexArr={[2, 1, 1]} style={styles.head} textStyle={styles.text} />
//                     <TableWrapper style={styles.wrapper}>
//                         <FlatList>
//                             <Col data={this.state.LeadList} style={styles.row} textStyle={styles.text}
//                                 renderItem={({ item }) =>
//                                     <Text>{item.Leads}</Text>
//                                 } />
//                         </FlatList>
//                     </TableWrapper>
//                 </Table>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
//     head: { height: 40, backgroundColor: '#f1f8ff' },
//     wrapper: { flexDirection: 'row' },
//     title: { flex: 1, backgroundColor: '#f6f8fa' },
//     row: { height: 28 },
//     text: { textAlign: 'center' }
// });