import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

export default class Register extends React.Component {
    constructor(props) {
        super(props)
        this.routeAfterParticipate = this.props.navigation.getParam('routeAfterParticipate', null);
    }

    _done = async () => {
        await AsyncStorage.setItem('isLoggedIn', 'token');

        this.props.navigation.navigate('RegisterSuccess', {
            routeAfterParticipate: this.routeAfterParticipate
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Register</Text>
                <Button
                    onPress={this._done}
                    title="Submit"
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
