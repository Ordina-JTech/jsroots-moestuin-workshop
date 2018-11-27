import {Component, Prop} from '@stencil/core';
import {MatchResults} from '@stencil/router';

@Component({
  tag: 'app-profile',
  shadow: true
})
export class AppProfile {
  @Prop() match: MatchResults;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  render(): JSX.Element {
  }
}
