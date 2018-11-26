# Full STEK je moestuin met JavaScript!

## Prerequisites
- Node 6.4.1 < or higher
- Xiaomi Flora Sensor
- (Optional Windows / devices without BLE) - Bluetooth 4.0 USB Adapter

## Installation
```sh
npm install
```
Start the REST server on port 8888.
```sh
node rest-server.js
```

## Notes
- if your flora's firmware version is older than 2.8.6, please install [v0.1.0](https://github.com/demirhanaydin/node-mi-flora/tree/v0.1.0)
- [WinUSB](https://msdn.microsoft.com/en-ca/library/windows/hardware/ff540196(v=vs.85).aspx) driver setup for Bluetooth 4.0 USB adapter, using [Zadig tool](http://zadig.akeo.ie/)
