import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

export default class RegisterSuccess extends React.Component {
    constructor(props) {
        super(props)
        this.routeAfterParticipate = this.props.navigation.getParam('routeAfterParticipate', null);
    }

    _done = () => {
        if (this.routeAfterParticipate !== null) {
            // back to screen before requiring participate, and navigate to target route
            const action = NavigationActions.back({
                key: 'participateRequired',
            });
            this.props.navigation.dispatch(action);
            this.props.navigation.navigate(this.routeAfterParticipate);

        } else {
            // after success of normal participate flow, reset stack and enter to first Tab screen
            const resetAction = StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Tab' }),
                ],
            });
            this.props.navigation.dispatch(resetAction);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Register Success!</Text>
                <Button
                    onPress={this._done}
                    title="OK"
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
