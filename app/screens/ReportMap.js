import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import MapView from 'react-native-maps';

export default class ReportMap extends React.Component {
    constructor(props) {
        super(props)
        this.initialRegion = {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421,
        };
        
        this.state = { isLoggedIn: false };
        this.navDidFocusSubsciption = this.props.navigation.addListener('didFocus', payload => this._bootstrapAsync())
    }

    _bootstrapAsync = async () => {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        this.setState({ isLoggedIn: isLoggedIn });
    }

    componentWillUnmount() {
        this.navDidFocusSubsciption.remove();
    }

    _logout = async () => {
        await AsyncStorage.removeItem('isLoggedIn');

        const action = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Participate' }),
            ],
        });
        this.props.navigation.dispatch(action);
    }

    _navigateToForm = () => {
        if (!this.state.isLoggedIn) {
            const navigationAction = NavigationActions.navigate({
                routeName: 'Participate',
                params: {
                    routeAfterParticipate: 'Form'
                },
                key: 'participateRequired'
            });

            this.props.navigation.dispatch(navigationAction);
            return;
        }

        this.props.navigation.navigate('Form');
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={styles.fullScreenMap}
                    initialRegion={this.initialRegion}
                />
                <View style={styles.bottom}>
                    <Button
                        onPress={() => { this.props.navigation.push('Detail') }}
                        title="See detail"
                        color="#841584"
                    />
                    <Button
                        onPress={this._navigateToForm}
                        title="Create report"
                        color="#1abc9c"
                    />
                    { this.state.isLoggedIn ?
                        <Button
                            onPress={this._logout}
                            title="Log out"
                            color="#3498db"
                        /> : null
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    fullScreenMap: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    bottom: {
        position: 'absolute',
        bottom: 20,
        right: 20
    }
});