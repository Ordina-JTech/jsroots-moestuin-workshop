import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-measurements',
  styleUrl: 'app-measurements.scss',
  shadow: true
})
export class AppMeasurements {

  @Prop() fertility: number;
  @Prop() lux: number;
  @Prop() moisture: number;
  @Prop() temperature: number;

  render(){
    return (
      <div class='app-measurements'>
        <div class='measure-type'>
          <p>temperature:</p>
          <p>lux:</p>
          <p>moisture:</p>
          <p>fertility:</p>
        </div>
        <div class='measure-result'>
          <p>{ this.temperature }°C</p>
          <p>{ this.lux }</p>
          <p>{ this.moisture }%</p>
          <p>{ this.fertility }</p>
        </div>
      </div>
    );
  }
}
