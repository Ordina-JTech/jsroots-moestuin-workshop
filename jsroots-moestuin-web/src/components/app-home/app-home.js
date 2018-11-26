var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop } from '@stencil/core';
let AppHome = class AppHome {
    constructor() {
        this.state = 'happy-sky';
    }
    render() {
        return (h("div", { class: `app-home--${this.state}` },
            h("p", null, "This is the home app!"),
            h("app-measurements", { fertility: '123', temperature: '20', lux: '4312', moisture: '432' })));
    }
};
__decorate([
    Prop()
], AppHome.prototype, "state", void 0);
AppHome = __decorate([
    Component({
        tag: 'app-home',
        styleUrl: 'app-home.scss',
        shadow: true
    })
], AppHome);
export { AppHome };
