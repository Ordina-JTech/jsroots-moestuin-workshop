import {Component, State} from "@stencil/core"
// TODO: Step 6


/**
 * This component is in charge of managing the
 * connection with the backend, listening to
 * updates via socket.io and rendering the flower
 * components for each device retrieved from the
 * backend.
 */
@Component({
  tag: "app-home",
  styleUrl: "app-home.scss",
  shadow: true
})
export class AppHome {
  // TODO: Step 9


  /**
   * The actual list of flowers retrieved from
   * the backend. Initially is an empty array,
   * but once the backend has an updated list
   * of flower data available, this list is
   * updated with the newest flower data.
   */
  @State()
  loader: any = <img src="assets/loadingspinner/infinity.svg"/>;
  @State()
  flowers: any[] = [];

  /**
   * Called when the component is initialized.
   */

  // TODO: Step 11
  componentWillLoad() {
  }

  /**
   *  Called when a component is going to update.
   */

  componentWillUpdate() {
    this.loadSpinner();
  }

  // TODO: Step 10
  updateFlowerData() {
    // Listen to the socket connection "data" event

      // Update the flowers list with the new data retrieved
    
  }

  // A loading spinner is shown until Data is retrieved.
  loadSpinner() {
    if (this.flowers.length >= 1) {
      this.loader = null;
    }
  }


  render(): JSX.Element {
    return (
      <div class="container">
        <div class="grid">
          {this.flowers.map(flower => (
            <app-flower flower={flower}/>
          ))}
        </div>
        <div class="loadingspinner">{this.loader}</div>
      </div>
    );
  }
}
