import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { AsyncStorage } from 'react-native';

const slides = [
    {
      key: 'somethun',
      title: 'Title 1',
      text: 'Description.\nSay something cool',      
      backgroundColor: '#59b2ab',
    },
    {
      key: 'somethun-dos',
      title: 'Title 2',
      text: 'Other cool stuff',
      backgroundColor: '#febe29',
    },
    {
      key: 'somethun1',
      title: 'Rocket guy',
      text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
      backgroundColor: '#22bcb5',
    }
  ];

export default class OnBoardingScreen extends React.Component {

    _onDone = async () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        await AsyncStorage.setItem('seenOnBoarding', 'true')
        this.props.navigation.navigate('Main')
    }

    render() {
        return (
            <AppIntroSlider slides={slides} onDone={this._onDone}/>
        )
    }
}