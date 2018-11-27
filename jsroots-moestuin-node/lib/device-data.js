class DeviceData {
    // TODO: Step 1

    toString() {
        return JSON.stringify(this.getJSON());
    }

    equal(deviceData) {
        return this.toString() === deviceData.toString();
    }
}

module.exports = DeviceData;