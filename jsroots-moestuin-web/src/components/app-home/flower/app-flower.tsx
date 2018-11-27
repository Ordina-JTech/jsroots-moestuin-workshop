import {Component, Prop, State, Method} from "@stencil/core";

const FLOWERSTATES = {
  DEAD_FLOWER: 'dead-flower',
  DEHYDRATED_FLOWER: 'dehydrated-flower',
  DOUBTFUL_FLOWER: 'doubtful-flower',
  FROZEN_FLOWER: 'frozen-flower',
  HAPPY_FLOWER: 'happy-flower',
  SLEEPY_FLOWER: 'sleepy-flower',
  NEUTRAL_FLOWER: 'neutral-flower'
};

interface IDeviceValues {
  deviceId: string,
  temperature: number,
  lux: number,
  moisture: number,
  fertility: number
}

/**
 * The flower component is rendered for each device
 * that is connected to the backend. This is a
 * reusable component.
 */
@Component({
  tag: "app-flower",
  styleUrl: "app-flower.scss",
  shadow: true
})
export class FlowerComponent {
  /**
   * @State properties are for keeping track internally in this component
   * what values we are using, and which flower image should be shown.
   */
  @State()
  flowerImageState: string = "neutral-flower";
  @State()
  deviceId: string;
  @State()
  temperature: number;
  @State()
  lux: number;
  @State()
  moisture: number;
  @State()
  fertility: number;

  /**
   * Device reading object that is passed from the
   * app-home component to this flower component.
   * Contains all the flower data (deviceId, etc).
   */
  @Prop()
  flower: any;

  /**
   * This method is called when we receive an update
   * from the backend about new flower sensor info.
   * This info is passed from the app-home into the
   * this.flower @Property and any changes to it
   * will trigger the onFlowerChanged() method.
   *
   * @param value The new flower sensor data.
   */

  // TODO: Step 12


  /**
   * When the component is initializing, trigger the
   * calculation once because the @Watch doesn't get
   * triggered the first time the component loads.
   */

  // TODO: Step 13
  componentWillLoad() {
  }

  // TODO: BONUS!
  @Method()
  calculateFlowerState() {
    if (this.lux <= 61 && this.lux > 50) {
      this.flowerImageState = FLOWERSTATES.DEHYDRATED_FLOWER;
    } else if (this.lux >= 340) {
      this.flowerImageState = FLOWERSTATES.DEAD_FLOWER;
    } else if (this.lux > 180 && this.lux < 340) {
      this.flowerImageState = FLOWERSTATES.HAPPY_FLOWER;
    } else if (this.lux <= 50) {
      this.flowerImageState = FLOWERSTATES.SLEEPY_FLOWER;
    } else {
      this.flowerImageState = FLOWERSTATES.NEUTRAL_FLOWER;
    }
  }

  render(): JSX.Element {
    let image: any;
    let backgroundClass: string;
    let grassType: string;

    switch (this.flowerImageState) {
      case FLOWERSTATES.DEAD_FLOWER:
        image = <img src={`/assets/svg/${FLOWERSTATES.DEAD_FLOWER}.svg`} alt={FLOWERSTATES.DEAD_FLOWER}/>;
        backgroundClass = "background background--dead";
        grassType = "grass grass--dead";
        break;
      case FLOWERSTATES.DEHYDRATED_FLOWER:
        image = (
          <img src={`/assets/svg/${FLOWERSTATES.DEHYDRATED_FLOWER}.svg`} alt={FLOWERSTATES.DEHYDRATED_FLOWER}/>
        );
        backgroundClass = "background background--dehydrated";
        grassType = "grass grass--dehydrated";
        break;
      case FLOWERSTATES.DOUBTFUL_FLOWER:
        image = (
          <img src={`/assets/svg/${FLOWERSTATES.DOUBTFUL_FLOWER}.svg`} alt={FLOWERSTATES.DOUBTFUL_FLOWER}/>
        );
        backgroundClass = "background background--doubtful";
        grassType = "grass grass--doubtful";
        break;
      case FLOWERSTATES.FROZEN_FLOWER:
        image = (
          <img src={`/assets/svg/${FLOWERSTATES.FROZEN_FLOWER}.svg`} alt={FLOWERSTATES.FROZEN_FLOWER}/>
        );
        backgroundClass = "background background--frozen";
        grassType = "grass grass--frozen";
        break;
      case FLOWERSTATES.HAPPY_FLOWER:
        image = <img src={`/assets/svg/${FLOWERSTATES.HAPPY_FLOWER}.svg`} alt={FLOWERSTATES.HAPPY_FLOWER}/>;
        backgroundClass = "background background--happy";
        grassType = "grass grass--happy";
        break;
      case FLOWERSTATES.SLEEPY_FLOWER:
        image = <img src={`/assets/svg/${FLOWERSTATES.SLEEPY_FLOWER}.svg`} alt={FLOWERSTATES.SLEEPY_FLOWER}/>
        backgroundClass = "background background--night";
        grassType = "grass grass--night";
        break;
      default:
        image = (
          <img src={`/assets/svg/${FLOWERSTATES.NEUTRAL_FLOWER}.svg`} alt={FLOWERSTATES.NEUTRAL_FLOWER}/>
        );
        backgroundClass = "background background--neutral";
        grassType = "grass grass--neutral";
        break;
    }

    return (
      <div class="app-home">

        <div class={backgroundClass}>
          <app-measurements
            fertility={this.fertility}
            temperature={this.temperature}
            lux={this.lux}
            moisture={this.moisture}
          />
          {image}
          <div class={grassType}/>
        </div>
      </div>

    );
  }
}
