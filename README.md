# MSDGeofence

Requirements: android or ios simulator, or phone with expo go downloaded

After downloading the zip from GitHub, you need to add a .env file inside the /Geofence directory and add "IP=0" without the speech marks, replacing the 0 with your ipv4 address (I assume you know how to do this).
If you downloaded the zip from my submission, you should already have a .env file inside the /Geofence directory, you just need to replace the 0 with your ipv4 address.

To run the program, you need two terminals.
Terminal 1: root directory
Run the following command:

`$ npm install`

`$ node index.js`

This will run the server and you should see:

`Websocket server started on port 3000`

(if you are using a simulator, you should probably open it before running the command on the next terminal as usually I run into problems if I don't do this)

Terminal 2: /Geofence directory
Run the following command:

`$ npm install`

`$ npm start`

This should open up a page on your browser where you can run the application by clicking the 

`Run on an Android device/emulator`

or

`Run in iOS simulator`

If you are using the expo go app, you may scan the QR code that appears in the bottom left.
note: the map zooms to the geofence, so you may need to zoom out to find your location.
note: the send location data will send it to your console on the first terminal as well as to your mum (one of those is a lie, I won't tell you which though).
