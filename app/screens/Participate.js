import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

export default class Participate extends React.Component {
    constructor(props) {
        super(props)
        this.routeAfterParticipate = this.props.navigation.getParam('routeAfterParticipate', null);
    }

    _navigateToRegister = () => {
        this.props.navigation.navigate('Register', {
            routeAfterParticipate: this.routeAfterParticipate
        });
    }

    _navigateToLogin = () => {
        this.props.navigation.navigate('Login', {
            routeAfterParticipate: this.routeAfterParticipate
        });
    }

    _accessAsGuest = () => {
        const action = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Tab' }),
            ],
        });
        this.props.navigation.dispatch(action);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Participate</Text>
                <Button
                    onPress={this._navigateToRegister}
                    title="Register"
                    color="#1abc9c"
                />
                <Button
                    onPress={this._navigateToLogin}
                    title="Login"
                    color="#3498db"
                />
                <Button
                    onPress={this._accessAsGuest}
                    title="Guest access"
                    color="#841584"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EF9A9A',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
