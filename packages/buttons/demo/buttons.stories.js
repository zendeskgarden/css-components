/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import '../dist/index.css';
import React from 'react';

export default {
  title: 'Components/Buttons'
};

export const Types = {
  render: ({ size = false, state = false, style = false }) => (
    <div className="container">
      <div className="row align-items-center">
        <div className="col u-mt">
          <button
            type="button"
            className={`c-btn ${size} ${style && style.join(' ')} ${state && state.join(' ')}`}
          >
            .c-btn{size && `.${size}`}
            {style && style.length > 0 && `.${style.join('.')}`}
            {state && state.length > 0 && `.${state.join('.')}`}
          </button>
        </div>
        <div className="col u-mt">
          <button
            type="button"
            className={`c-btn c-btn--pill ${size} ${style && style.join(' ')} ${
              state && state.join(' ')
            }`}
          >
            .c-btn.c-btn--pill{size && `.${size}`}
            {style && style.length > 0 && `.${style.join('.')}`}
            {state && state.length > 0 && `.${state.join('.')}`}
          </button>
        </div>
        <div className="col u-mt">
          <button
            type="button"
            className={`c-btn c-btn--basic ${size} ${style && style.join(' ')} ${
              state && state.join(' ')
            }`}
          >
            .c-btn.c-btn--basic{size && `.${size}`}
            {style && style.length > 0 && `.${style.join('.')}`}
            {state && state.length > 0 && `.${state.join('.')}`}
          </button>
        </div>
        <div className="col u-mt">
          <button
            type="button"
            className={`c-btn c-btn--anchor ${size} ${style && style.join(' ')} ${
              state && state.join(' ')
            }`}
          >
            .c-btn.c-btn--anchor{size && `.${size}`}
            {style && style.length > 0 && `.${style.join('.')}`}
            {state && state.length > 0 && `.${state.join('.')}`}
          </button>
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
      options: [undefined, 'c-btn--sm', 'c-btn--lg']
    },
    state: {
      control: {
        type: 'inline-check'
      },
      options: ['is-hovered', 'is-active', 'is-focused', 'is-disabled']
    },
    style: {
      control: {
        type: 'inline-check'
      },
      options: ['c-btn--primary', 'c-btn--danger', 'c-btn--full']
    }
  }
};

export const Icons = {
  render: ({ isRotated, size, style }) => (
    <div className="container">
      <div className="row align-items-center">
        <div className="col u-mt">
          <button type="button" className={`c-btn c-btn--icon ${size} ${style && style.join(' ')}`}>
            <svg
              className={`c-btn__icon ${isRotated && 'is-rotated'}`}
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
          </button>
        </div>
        <div className="col u-mt">
          <button type="button" className={`c-btn c-btn--icon ${size} ${style && style.join(' ')}`}>
            <svg
              className={`c-btn__icon ${isRotated && 'is-rotated'}`}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              focusable="false"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M12.688 5.61a.5.5 0 0 1 .69.718l-.066.062-5 4a.5.5 0 0 1-.542.054l-.082-.054-5-4a.5.5 0 0 1 .55-.83l.074.05L8 9.359l4.688-3.75z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  ),
  name: 'Icons',
  argTypes: {
    isRotated: {
      name: 'is-rotated',
      control: {
        type: 'boolean'
      }
    },
    size: {
      control: {
        type: 'inline-radio'
      },
      options: [undefined, 'c-btn--sm', 'c-btn--lg']
    },
    style: {
      control: {
        type: 'inline-check'
      },
      options: ['c-btn--pill', 'c-btn--basic', 'c-btn--primary', 'c-btn--danger']
    }
  }
};
