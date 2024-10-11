/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import '../dist/index.css';
import { Grid } from '@zendeskgarden/react-grid';
import React from 'react';
import { useTheme } from 'styled-components';

export default {
  title: 'Components/Buttons'
};

const toClassName = (theme, base, size = false, style = []) => {
  let retVal = theme.colors.base === 'dark' ? `${base} c-btn--dark` : base;

  if (size) {
    retVal += ` ${size}`;
  }

  if (style.length > 0) {
    retVal += ` ${style.join(' ')}`;
  }

  return retVal;
};

const toClassSelector = (theme, base, size = false, style = []) => {
  let retVal = theme.colors.base === 'dark' ? `${base}.c-btn--dark` : base;

  if (size) {
    retVal += `.${size}`;
  }

  if (style.length > 0) {
    retVal += `.${style.join('.')}`;
  }

  return retVal;
};

export const Types = {
  render: ({ disabled, size, style }) => {
    /* eslint-disable-next-line react-hooks/rules-of-hooks */
    const theme = useTheme();

    return (
      <Grid>
        <Grid.Row>
          <Grid.Col className="mt-5">
            <button
              type="button"
              className={toClassName(theme, 'c-btn', size, style)}
              disabled={disabled}
            >
              <span dir="ltr">{toClassSelector(theme, '.c-btn', size, style)}</span>
            </button>
          </Grid.Col>
          <Grid.Col className="mt-5">
            <button
              type="button"
              className={toClassName(theme, 'c-btn c-btn--pill', size, style)}
              disabled={disabled}
            >
              <span dir="ltr">{toClassSelector(theme, '.c-btn.c-btn--pill', size, style)}</span>
            </button>
          </Grid.Col>
          <Grid.Col className="mt-5">
            <button
              type="button"
              className={toClassName(theme, 'c-btn c-btn--basic', size, style)}
              disabled={disabled}
            >
              <span dir="ltr">{toClassSelector(theme, '.c-btn.c-btn--basic', size, style)}</span>
            </button>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    );
  },
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
  },
  decorators: [Story => <Story />]
};

export const Icons = {
  render: ({ disabled, size, style }) => {
    /* eslint-disable-next-line react-hooks/rules-of-hooks */
    const theme = useTheme();

    return (
      <Grid>
        <Grid.Row>
          <Grid.Col className="mt-5">
            <button
              type="button"
              className={toClassName(theme, 'c-btn c-btn--icon', size, style)}
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
            <div className="mt-2">
              <code className="text-sm" dir="ltr">
                {toClassSelector(theme, '.c-button.c-btn--icon', size, style)} .c-btn__icon
              </code>
            </div>
          </Grid.Col>
          <Grid.Col className="mt-5">
            <button
              type="button"
              className={toClassName(theme, 'c-btn c-btn--icon', size, style)}
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
            <div className="mt-2">
              <code className="text-sm" dir="ltr">
                {toClassSelector(theme, '.c-button.c-btn--icon', size, style)} .c-btn__icon
              </code>
            </div>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    );
  },
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
  },
  decorators: [Story => <Story />]
};
