/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import '../dist/index.css';
import React from 'react';

export default {
  title: 'Components/Callouts'
};

export const Default = {
  render: ({ isDialog, isRecessed, type }) => (
    <div className="container">
      <div className="row">
        <div className="col u-mt">
          <div
            className={`c-callout ${isDialog && 'c-callout--dialog'} ${
              isRecessed && 'c-callout--recessed'
            } ${type}`}
          >
            <strong className="c-callout__title">Callout (one-line)</strong>
            <p>Paleo gochujang heirloom salvia subway tile letterpress retro.</p>
          </div>
        </div>
        <div className="col u-mt">
          <div
            className={`c-callout ${isDialog && 'c-callout--dialog'} ${
              isRecessed && 'c-callout--recessed'
            } ${type}`}
          >
            <strong className="c-callout__title">Callout (multi-line)</strong>
            <p className="c-callout__paragraph">
              Chicharrones brooklyn cardigan marfa pour-over craft beer dreamcatcher cold-pressed
              brunch meggings. Live-edge disrupt narwhal irony neutra single-origin coffee,
              biodiesel before they sold out roof party venmo farm-to-table direct trade poke
              tousled aesthetic. Prism dreamcatcher glossier cloud bread blue bottle farm-to-table
              celiac chicharrones single-origin coffee salvia knausgaard raclette.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
  name: 'Default',
  argTypes: {
    isDialog: {
      name: 'c-callout--dialog',
      control: {
        type: 'boolean'
      }
    },
    isRecessed: {
      name: 'c-callout--recessed',
      control: {
        type: 'boolean'
      }
    },
    type: {
      control: {
        type: 'inline-radio'
      },
      options: [
        undefined,
        'c-callout--info',
        'c-callout--success',
        'c-callout--warning',
        'c-callout--error'
      ]
    }
  }
};
