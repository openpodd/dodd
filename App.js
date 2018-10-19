import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import ReportMap from './app/screens/ReportMap';
import ReportList from './app/screens/ReportList';
import ReportDetail from './app/screens/ReportDetail';
import ReportComment from './app/screens/ReportComment';
import ReportForm from './app/screens/ReportForm';
import Participate from './app/screens/Participate';
import Register from './app/screens/Register';
import RegisterSuccess from './app/screens/RegisterSuccess';
import Login from './app/screens/Login';
import OnBoarding from './app/screens/Onboarding';
import AppLoading from './app/screens/AppLoading';

const Tab = createBottomTabNavigator({
    Map: ReportMap,
    List: ReportList
});

const Main = createStackNavigator({
    Participate: {
        screen: Participate,
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    },
    Register: Register,
    RegisterSuccess: RegisterSuccess,
    Login: Login,
    Tab: {
        screen: Tab,
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    },
    Detail: ReportDetail,
    Comment: ReportComment,
    Form: ReportForm,
}, {
    initialRouteName: 'Participate',
});


// using switchNavigator so user can't click back button from mainNavigator
const App = createSwitchNavigator({
    AppLoading: AppLoading,
    OnBoarding: OnBoarding,
    Main: Main,
})

export default App;
