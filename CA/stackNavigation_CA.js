import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import DashBoardSales from './Dashboard_CA.js';
import History from "../history(Alluser).js";
import Report from "./CompanyReport_CA.js";
import Profile from './Account_CA.js';
import Salesperson from './SalespersonReport_CA.js';
import Remarks from '../remarks.js';
import LeadDetail from './LeadsDetailWithSale_CA.js';
import Reassign from './ReassignSale_CA.js';
import ListUnassignedLeads from './ListofLeadsWithoutSale_CA.js';
import LeadsWithoutSalesperson from './leadsDetail_wthoutSalesPrsn.js';
import AssignSalesperson from './AssignSalesperson_CA.js';
import ReportSalesperson from './SalespersonReport_CA.js';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
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
        name="Salesperson"
        component={Salesperson}
        options={{
          tabBarLabel: 'Salesperson',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="sale" color={color} size={size} style={{transform: [{rotateY: '180deg'}]}} />
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

const Stack = createStackNavigator();

function StackDashboard() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={MyTabs}/>
            <Stack.Screen name="Remarks" component={Remarks} />
            <Stack.Screen name="Lead Detail" component={LeadDetail} />
            <Stack.Screen name="Reassign" component={Reassign}/>
            <Stack.Screen name="List Unassigned Leads" component={ListUnassignedLeads}/>
            <Stack.Screen name="Leads Without Salesperson" component={LeadsWithoutSalesperson}/>
            <Stack.Screen name="Assign Salesperson" component={AssignSalesperson}/>
            <Stack.Screen name="Report Salesperson" component={ReportSalesperson}/>
        </Stack.Navigator>
    );
};


export default StackDashboard;
