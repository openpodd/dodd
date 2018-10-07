import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'

import ReportMap from './app/screens/ReportMap';
import ReportList from './app/screens/ReportList';
import OnBoarding from './app/screens/Onboarding';

const Main = createBottomTabNavigator({
  Map: ReportMap,
  List: ReportList
});

// using switchNavigator so user can't click back button from mainNavigator
const App = createSwitchNavigator({
  OnBoarding: OnBoarding,
  Main: Main,
})

export default App;
