import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps'

export default class ReportMap extends React.Component {
    constructor(props) {
        super(props)
        this.initialRegion = {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421,
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={styles.fullScreenMap}
                    initialRegion={this.initialRegion}
                    />                
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
    }
});