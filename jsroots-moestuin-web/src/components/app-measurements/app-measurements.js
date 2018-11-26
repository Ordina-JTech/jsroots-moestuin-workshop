var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop } from '@stencil/core';
let AppMeasurements = class AppMeasurements {
    render() {
        return (h("div", { class: 'app-measurements' },
            h("div", { class: 'measure-type' },
                h("p", null, "temperature:"),
                h("p", null, "lux:"),
                h("p", null, "moisture:"),
                h("p", null, "fertility:")),
            h("div", { class: 'measure-result' },
                h("p", null,
                    this.temperature,
                    "\u00B0C"),
                h("p", null, this.lux),
                h("p", null,
                    this.moisture,
                    "%"),
                h("p", null, this.fertility))));
    }
};
__decorate([
    Prop()
], AppMeasurements.prototype, "fertility", void 0);
__decorate([
    Prop()
], AppMeasurements.prototype, "lux", void 0);
__decorate([
    Prop()
], AppMeasurements.prototype, "moisture", void 0);
__decorate([
    Prop()
], AppMeasurements.prototype, "temperature", void 0);
AppMeasurements = __decorate([
    Component({
        tag: 'app-measurements',
        styleUrl: 'app-measurements.scss',
        shadow: true
    })
], AppMeasurements);
export { AppMeasurements };
