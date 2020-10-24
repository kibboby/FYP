import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//Bottom Tab Navigation
import DashBoardSales from './Dashboard_SL.js';
import History from "./TaskHistory_SL.js";
import Report from "./ReportButton_SL.js";
import Profile from './Account_SL.js';

//Account related pages for Salesperson
import AccountSettings from './AccountSetting_SL.js';
import ProfileSettings from './ProfileSetting_SL.js';
import NotificationSettings from './NotificationSetting_SL.js';
import ChangePassword from './ChangePasswordSetting_SL.js';

//Report related pages for Salesperson
import WonLeadReport from './WonLeadsReport_SL.js';
import LostLeadReport from './LostLeadsReport_SL.js';

//Lead related pages for Salesperson
import LeadsDetail from './LeadsDetailWithTask_SL.js';
import Remarks from './Remarks_SL.js';

//Create new tasks pages for Salesperson
import CreateCallTask from './CreateCallTask_SL.js';
import CreateAppointmentTask from './CreateAppointmentTask_SL.js';
import CreateOtherTask from './CreateOtherTask_SL.js';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const HistoryStack = createStackNavigator();
const ReportStack = createStackNavigator();
const AccountStack = createStackNavigator();

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
        component={HomeStackNav}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryStackNav}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Report"
        component={ReportStackNav}
        options={{
          tabBarLabel: 'Report',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chart-bar-stacked" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStackNav}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} style={{ transform: [{ rotateY: '180deg' }] }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function HomeStackNav() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Dashboard" component={DashBoardSales} />
      <HomeStack.Screen name="Remarks" component={Remarks} />
      <HomeStack.Screen name="Lead Detail" component={LeadsDetail} />
    </HomeStack.Navigator>
  )
}

function HistoryStackNav() {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen name="History" component={History} />
    </HistoryStack.Navigator>
  )
}

function ReportStackNav() {
  return (
    <ReportStack.Navigator>
      <ReportStack.Screen name="Report Button" component={Report}/>
      <ReportStack.Screen name="Won Leads Report" component={WonLeadReport}/>
      <ReportStack.Screen name="Lost Leads Report" component={LostLeadReport}/>
      <ReportStack.Screen name="Lead Detail" component={LeadsDetail}/>
    </ReportStack.Navigator>
  )
}

function AccountStackNav(){
  return(
    <AccountStack.Navigator>
      <AccountStack.Screen name="Account" component={Profile}/>
      <AccountStack.Screen name="Account Settings" component={AccountSettings}/>
      <AccountStack.Screen name="Profile Settings" component={ProfileSettings}/>
      <AccountStack.Screen name="Notification Settings" component={NotificationSettings}/>
      <AccountStack.Screen name="ChangePassword" component={ChangePassword}/>
    </AccountStack.Navigator>
  )
}

export default MyTabs; 