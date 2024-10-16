/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import '../dist/index.css';
import { Grid } from '@zendeskgarden/react-grid';
import React from 'react';
import SystemImage from './images/system.png';
import UserImage from './images/avatar.png';
import { useTheme } from 'styled-components';

export default {
  title: 'Components/Avatars'
};

const toClassName = (theme, base, size = undefined) => {
  let retVal = theme.colors.base === 'dark' ? `${base} c-avatar--dark` : base;

  if (size) {
    retVal += ` ${size}`;
  }

  return retVal;
};

const toClassSelector = (theme, base, size = undefined) => {
  let retVal = theme.colors.base === 'dark' ? `${base}.c-avatar--dark` : base;

  if (size) {
    retVal += `.${size}`;
  }

  return retVal;
};

export const Types = {
  render: ({ size }) => {
    /* eslint-disable-next-line react-hooks/rules-of-hooks */
    const theme = useTheme();

    return (
      <Grid>
        <Grid.Row>
          <Grid.Col className="mt-5">
            <figure className={toClassName(theme, 'c-avatar', size)}>
              <img alt="user" src={UserImage} />
            </figure>
            <div className="mt-2">
              <code className="text-sm" dir="ltr">
                {toClassSelector(theme, '.c-avatar', size)}
              </code>
            </div>
          </Grid.Col>
          <Grid.Col className="mt-5">
            <figure className={toClassName(theme, 'c-avatar c-avatar--system', size)}>
              <img alt="system" src={SystemImage} />
            </figure>
            <div className="mt-2">
              <code className="text-sm" dir="ltr">
                {toClassSelector(theme, '.c-avatar.c-avatar--system', size)}
              </code>
            </div>
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

      options: [undefined, 'c-avatar--xs', 'c-avatar--sm', 'c-avatar--lg']
    }
  },
  decorators: [Story => <Story />]
};

export const Variants = {
  render: ({ size }) => {
    /* eslint-disable-next-line react-hooks/rules-of-hooks */
    const theme = useTheme();

    return (
      <Grid>
        <Grid.Row>
          <Grid.Col className="mt-5">
            <figure className={toClassName(theme, 'c-avatar bg-royal-700', size)}>
              <span className="c-avatar__txt">G</span>
            </figure>
            <div className="mt-2">
              <code className="text-sm" dir="ltr">
                {toClassSelector(theme, '.c-avatar', size)} .c-avatar__txt
              </code>
            </div>
          </Grid.Col>
          <Grid.Col className="mt-5">
            <figure className={toClassName(theme, 'c-avatar c-avatar--system bg-royal-700', size)}>
              <span className="c-avatar__txt">ZD</span>
            </figure>
            <div className="mt-2">
              <code className="text-sm" dir="ltr">
                {toClassSelector(theme, '.c-avatar.c-avatar--system', size)} .c-avatar__txt
              </code>
            </div>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col className="mt-5">
            <figure
              className={toClassName(
                theme,
                `c-avatar bg-grey-${theme.colors.base === 'dark' ? '600' : '700'}`,
                size
              )}
            >
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
            <div className="mt-2">
              <code className="text-sm" dir="ltr">
                {toClassSelector(theme, '.c-avatar', size)} &gt; svg
              </code>
            </div>
          </Grid.Col>
          <Grid.Col className="mt-5">
            <figure
              className={toClassName(
                theme,
                `c-avatar c-avatar--system bg-kale-${
                  theme.colors.base === 'dark' ? '500' : '1000'
                }`,
                size
              )}
            >
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
            <div className="mt-2">
              <code className="text-sm" dir="ltr">
                {toClassSelector(theme, '.c-avatar.c-avatar--system', size)} &gt; svg
              </code>
            </div>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    );
  },
  name: 'Variants',
  argTypes: {
    size: {
      control: {
        type: 'inline-radio'
      },
      options: [undefined, 'c-avatar--xs', 'c-avatar--sm', 'c-avatar--lg']
    }
  },
  decorators: [Story => <Story />]
};
