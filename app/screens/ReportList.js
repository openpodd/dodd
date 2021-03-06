import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

export default class ReportList extends React.Component {
    constructor(props) {
        super(props)
    }

    _isLoggedIn = async () => {
        return await AsyncStorage.getItem('isLoggedIn');

    }

    _navigateToForm = async () => {
        const isLoggedIn = await this._isLoggedIn();

        if (!isLoggedIn) {
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
            <View style={styles.container}>
                <Text>List</Text>
                <Button
                    onPress={() => { this.props.navigation.push('Detail') }}
                    title="See detail"
                    color="#841584"
                />
                <Button
                    onPress={this._navigateToForm}
                    title="Create new form"
                    color="#1abc9c"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#81D4FA',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
