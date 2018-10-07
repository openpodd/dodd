import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation'

import ReportMap from './app/screens/ReportMap';
import ReportList from './app/screens/ReportList'


const App = createBottomTabNavigator({
  Map: ReportMap,
  List: ReportList
});

export default App;
