/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  MatchResults,
} from '@stencil/router';

export namespace Components {
  interface AppFlower {
    'calculateFlowerState': () => Promise<void>;
    /**
    * Device reading object that is passed from the app-home component to this flower component. Contains all the flower data (deviceId, etc).
    */
    'flower': any;
  }
  interface AppHome {}
  interface AppMeasurements {
    'fertility': number;
    'lux': number;
    'moisture': number;
    'temperature': number;
  }
  interface AppProfile {
    'match': MatchResults;
  }
  interface AppRoot {}
}

declare global {


  interface HTMLAppFlowerElement extends Components.AppFlower, HTMLStencilElement {}
  var HTMLAppFlowerElement: {
    prototype: HTMLAppFlowerElement;
    new (): HTMLAppFlowerElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppMeasurementsElement extends Components.AppMeasurements, HTMLStencilElement {}
  var HTMLAppMeasurementsElement: {
    prototype: HTMLAppMeasurementsElement;
    new (): HTMLAppMeasurementsElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };
  interface HTMLElementTagNameMap {
    'app-flower': HTMLAppFlowerElement;
    'app-home': HTMLAppHomeElement;
    'app-measurements': HTMLAppMeasurementsElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
  }
}

declare namespace LocalJSX {
  interface AppFlower extends JSXBase.HTMLAttributes<HTMLAppFlowerElement> {
    /**
    * Device reading object that is passed from the app-home component to this flower component. Contains all the flower data (deviceId, etc).
    */
    'flower'?: any;
  }
  interface AppHome extends JSXBase.HTMLAttributes<HTMLAppHomeElement> {}
  interface AppMeasurements extends JSXBase.HTMLAttributes<HTMLAppMeasurementsElement> {
    'fertility'?: number;
    'lux'?: number;
    'moisture'?: number;
    'temperature'?: number;
  }
  interface AppProfile extends JSXBase.HTMLAttributes<HTMLAppProfileElement> {
    'match'?: MatchResults;
  }
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {}

  interface IntrinsicElements {
    'app-flower': AppFlower;
    'app-home': AppHome;
    'app-measurements': AppMeasurements;
    'app-profile': AppProfile;
    'app-root': AppRoot;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


