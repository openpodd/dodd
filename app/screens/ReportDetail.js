import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

export default class ReportDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    _isLoggedIn = async () => {
        return await AsyncStorage.getItem('isLoggedIn');
    }

    _navigateToComment = async () => {
        const isLoggedIn = await this._isLoggedIn();

        if (!isLoggedIn) {
            const navigationAction = NavigationActions.navigate({
                routeName: 'Participate',
                params: {
                    routeAfterParticipate: 'Comment'
                },
                key: 'participateRequired'
            });

            this.props.navigation.dispatch(navigationAction);
            return;
        }

        this.props.navigation.navigate('Comment');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Report Detail</Text>
                <Button
                    onPress={this._navigateToComment}
                    title="Add Comment"
                    color="#841584"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFCC80',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
