import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Circle } from "react-native-maps";
import * as Permissions from "expo-permissions";

export default class Map extends Component {
  state = {
    latitude: -36.85281,
    longitude: 174.76696,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    circleRadius: 40,
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          initialRegion={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: this.state.latitudeDelta,
            longitudeDelta: this.state.longitudeDelta,
          }}
        >
          <Circle
            center={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
            }}
            radius={this.state.circleRadius}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  map: {
    flex: 1,
  },
});
