/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import '../dist/index.css';
import { Grid } from '@zendeskgarden/react-grid';
import React from 'react';

export default {
  title: 'Components/Buttons'
};

const toClassName = (base, size = false, style = false) => {
  let retVal = base;

  if (size) {
    retVal += ` ${size}`;
  }

  if (style && style.length > 0) {
    retVal += ` ${style.join(' ')}`;
  }

  return retVal;
};

const toClassSelector = (base, size = false, style = false) => {
  let retVal = base;

  if (size) {
    retVal += `.${size}`;
  }

  if (style && style.length > 0) {
    retVal += `.${style.join('.')}`;
  }

  return retVal;
};

export const Types = {
  render: ({ disabled, size = false, style = false }) => (
    <Grid>
      <Grid.Row>
        <Grid.Col className="mt-5">
          <button type="button" className={toClassName('c-btn', size, style)} disabled={disabled}>
            {toClassSelector('.c-btn', size, style)}
          </button>
        </Grid.Col>
        <Grid.Col className="mt-5">
          <button
            type="button"
            className={toClassName('c-btn c-btn--pill', size, style)}
            disabled={disabled}
          >
            {toClassSelector('.c-btn.c-btn--pill', size, style)}
          </button>
        </Grid.Col>
        <Grid.Col className="mt-5">
          <button
            type="button"
            className={toClassName('c-btn c-btn--basic', size, style)}
            disabled={disabled}
          >
            {toClassSelector('.c-btn.c-btn--basic', size, style)}
          </button>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  ),
  name: 'Types',
  argTypes: {
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
      options: ['c-btn--primary', 'c-btn--danger', 'c-btn--full']
    },
    disabled: {
      name: 'disabled',
      control: {
        type: 'boolean'
      }
    }
  }
};

export const Icons = {
  render: ({ disabled, size, style }) => (
    <Grid>
      <Grid.Row>
        <Grid.Col className="mt-5">
          <button
            type="button"
            className={toClassName('c-btn c-btn--icon', size, style)}
            disabled={disabled}
          >
            <svg
              className="c-btn__icon"
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
        </Grid.Col>
        <Grid.Col className="mt-5">
          <button
            type="button"
            className={toClassName('c-btn c-btn--icon', size, style)}
            disabled={disabled}
          >
            <svg
              className="c-btn__icon"
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
        </Grid.Col>
      </Grid.Row>
    </Grid>
  ),
  name: 'Icons',
  argTypes: {
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
    },
    disabled: {
      name: 'disabled',
      control: {
        type: 'boolean'
      }
    }
  }
};
