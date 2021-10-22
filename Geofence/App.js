import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  Button,
  Text,
} from "react-native";
import * as Location from "expo-location";

import Map from "./components/Map";
import { IP } from "@env";

export default function App() {
  const [serverConnection, setServerConnection] = useState("dis/unconnected");
  const [messageFromServer, setMessageFromServer] = useState("");
  const [hasLocation, setHasLocation] = useState(false);
  const [location, setLocation] = useState(null);

  var ws = React.useRef(new WebSocket("ws://" + IP + ":3000")).current;

  useEffect(() => {
    (async () => {
      //Get location permissions
      await Location.requestBackgroundPermissionsAsync();
      await Location.requestForegroundPermissionsAsync();

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();

    ws.onopen = () => {
      setServerConnection("connected");
      ws.send("Connected to server successfully");
    };
    ws.onmessage = (message) => {
      setMessageFromServer(message.data);
    };
  }, []);

  sendMessage = () => {
    ws.send("message sent");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 0.75 }}>
        <Button
          title="send message to server"
          onPress={() => {
            sendMessage();
          }}
        />
        <Text>Server Connection is: {serverConnection}</Text>
        <Text>{JSON.stringify(location)}</Text>
        <Text>Current message from Server: {messageFromServer}</Text>
      </View>
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
