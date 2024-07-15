/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import '../dist/index.css';
import React from 'react';
import SystemImage from './images/system.png';
import UserImage from './images/avatar.png';

export default {
  title: 'Components/Avatars'
};

export const Types = {
  render: ({ size = false }) => (
    <div className="container">
      <div className="row">
        <div className="col u-mt">
          <figure className={`c-avatar ${size}`}>
            <img alt="user" src={UserImage} />
          </figure>
          <div className="u-mt-xs">
            <code>.c-avatar{!!size && `.${size}`}</code>
          </div>
        </div>
        <div className="col u-mt">
          <figure className={`c-avatar c-avatar--system ${size}`}>
            <img alt="system" src={SystemImage} />
          </figure>
          <div className="u-mt-xs">
            <code>.c-avatar.c-avatar--system{!!size && `.${size}`}</code>
          </div>
        </div>
      </div>
    </div>
  ),
  name: 'Types',
  argTypes: {
    size: {
      control: {
        type: 'inline-radio'
      },

      options: [undefined, 'c-avatar--xs', 'c-avatar--sm', 'c-avatar--lg']
    }
  }
};

export const Variants = {
  render: ({ size = false }) => (
    <div className="container">
      <div className="row">
        <div className="col u-mt">
          <figure className={`c-avatar ${size} u-bg-royal-600`}>
            <span className="c-avatar__txt">G</span>
          </figure>
          <div className="u-mt-xs">
            <code>.c-avatar{!!size && `.${size}`}.c-avatar__txt</code>
          </div>
        </div>
        <div className="col u-mt">
          <figure className={`c-avatar c-avatar--system ${size} u-bg-royal-600`}>
            <span className="c-avatar__txt">ZD</span>
          </figure>
          <div className="u-mt-xs">
            <code>.c-avatar.c-avatar--system{!!size && `.${size}`}.c-avatar__txt</code>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col u-mt">
          <figure className={`c-avatar ${size} u-bg-grey-600`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              focusable="false"
              viewBox="0 0 16 16"
            >
              <g fill="none" stroke="currentColor">
                <circle cx="8" cy="5" r="3.5" />
                <path strokeLinecap="round" d="M2.5 15.5c.3-2.8 2.6-5 5.5-5s5.2 2.2 5.5 5" />
              </g>
            </svg>
          </figure>
          <div className="u-mt-xs">
            <code>{`.c-avatar${size && `.${size}`} > svg`}</code>
          </div>
        </div>
        <div className="col u-mt">
          <figure className={`c-avatar c-avatar--system ${size} u-bg-kale-800`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              focusable="false"
              viewBox="0 0 26 26"
            >
              <path
                fill="currentColor"
                d="M12 8.2v14.5H0zM12 3c0 3.3-2.7 6-6 6S0 6.3 0 3h12zm2 19.7c0-3.3 2.7-6 6-6s6 2.7 6 6H14zm0-5.2V3h12z"
              />
            </svg>
          </figure>
          <div className="u-mt-xs">
            <code>{`.c-avatar.c-avatar--system${size && `.${size}`} > svg`}</code>
          </div>
        </div>
      </div>
    </div>
  ),
  name: 'Variants',
  argTypes: {
    size: {
      control: {
        type: 'inline-radio'
      },
      options: [undefined, 'c-avatar--xs', 'c-avatar--sm', 'c-avatar--lg']
    }
  }
};
