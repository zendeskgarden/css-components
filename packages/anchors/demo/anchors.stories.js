/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import '../dist/index.css';
import React from 'react';

export default {
  title: 'Components/Anchors'
};

export const Types = {
  render: ({ style = false }) => (
    <div className="container">
      <div className="row align-items-center">
        <div className="col u-mt">
          <a href="#0" className={`c-anchor ${style && style.join(' ')}`}>
            .c-anchor{!!style && style.length > 0 && `.${style.join('.')}`}
          </a>
        </div>
      </div>
    </div>
  ),
  name: 'Default',
  argTypes: {
    style: {
      control: {
        type: 'inline-check'
      },
      options: ['c-anchor--danger']
    }
  }
};
