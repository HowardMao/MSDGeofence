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

import Map from "./components/Map";

export default function App() {
  //add .env file with ip
  const ip = "0";
  const [serverConnection, setServerConnection] = useState("dis/unconnected");
  const [messageFromServer, setMessageFromServer] = useState("");
  var ws = React.useRef(new WebSocket("ws://" + ip + ":3000")).current;

  useEffect(() => {
    ws.onopen = () => {
      setServerConnection("connected");
      ws.send("Connected to server successfully");
    };
    ws.onmessage = (message) => {
      setMessageFromServer(message.data);
    };
  });

  sendMessage = () => {
    ws.send("message sent");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Button
          title="send message to server"
          onPress={() => {
            sendMessage();
          }}
        />
        <Text>Server Connection is: {serverConnection}</Text>
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
