class DeviceData {
    //TODO: (paste) contructor and get JSON.

    toString() {
        return JSON.stringify(this.getJSON());
    }

    equal(deviceData) {
        return this.toString() === deviceData.toString();
    }
}

module.exports = DeviceData;