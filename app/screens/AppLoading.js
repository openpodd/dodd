import React from 'react'
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
  } from 'react-native';

export default class AppLoading extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const seenOnBoarding = await AsyncStorage.getItem('seenOnBoarding');
    
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        if (seenOnBoarding) {
            const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
            this.props.navigation.navigate(isLoggedIn ? 'Tab' : 'Participate');
            
        } else {    
            this.props.navigation.navigate('OnBoarding');
        }
      };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });