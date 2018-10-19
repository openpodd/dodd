import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ReportComment extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>New Comment</Text>
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
        backgroundColor: '#FFF59D',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
