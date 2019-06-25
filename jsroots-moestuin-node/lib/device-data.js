class DeviceData {
    constructor(deviceId, temperature, lux, moisture, fertility) {
        this.deviceId = deviceId;
        this.temperature = temperature;
        this.lux = lux;
        this.moisture = moisture;
        this.fertility = fertility;
    }

    getJSON() {
        return {
            deviceId: this.deviceId, temperature: this.temperature, lux: this.lux,
            moisture: this.moisture, fertility: this.fertility
        }
    }

    toString() {
        return JSON.stringify(this.getJSON());
    }

    equal(deviceData) {
        return this.toString() === deviceData.toString();
    }
}

module.exports = DeviceData;
