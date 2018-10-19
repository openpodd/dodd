import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

export default class Form extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Report Form</Text>
                <Button
                    onPress={() => { this.props.navigation.goBack() }}
                    title="Submit"
                    color="#3498db"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0E0E0',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
