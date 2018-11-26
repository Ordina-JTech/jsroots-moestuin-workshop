import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/global/variables.scss'
      ]
    })
  ],
  globalStyle: 'src/global/app.scss',
  nodeResolve: {
    browser:true
  }
};
