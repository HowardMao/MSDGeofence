const express = require("express");
const http = require("http");
const ws = require("ws");

var app = express();
var server = http.createServer(app);
var wsServer = new ws.Server({ server });
const port = 3000;

//when connected
wsServer.on("connection", (clientSocket) => {
  //send a connection successful message
  clientSocket.send("connection successfuls");

  //when message received from client, console.log the message and re-send it back to the client
  clientSocket.on("message", (message) => {
    console.log(message.toString);
    clientSocket.send(message.toString());
  });
});

//open server
server.listen(port, () => {
  console.log(`Websocket server started on port ` + port);
});
