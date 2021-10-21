import React from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";

import Map from "./components/Map";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Map style={{ flex: 1 }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
