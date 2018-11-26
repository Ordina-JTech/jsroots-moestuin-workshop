const MiFlora = require('./miflora');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const io = require('socket.io')(http);


// Initialize MiFlora library
let flora = new MiFlora();
let floraDevices = [];

// Initialize server
let port = 8888;
const app = express();
const server = http.createServer(app);
app.use(bodyParser.json());
//TODO: (typing) io listen to server

//TODO: (typing) let server listen on port 8888


//TODO: Send data to backend localhost to showcase


// Listen to Flora events
flora.on('data', (data) => {
    console.log("Received device information from id: %s", data.deviceId);
    console.log("Received data: %s", data);

    updateDeviceData(data);
});

//TODO: (typing) start scanning flora.

// Update data received
function updateDeviceData(data) {
    let deviceIndex = floraDevices.findIndex(x => x.deviceId === data.deviceId);

    if (deviceIndex == -1) {
        floraDevices.push(data);
    } else {
        floraDevices[deviceIndex] = data;
    }
    //TODO: (typing) emit floraDevices locally to socket when you call event 'data'.
}