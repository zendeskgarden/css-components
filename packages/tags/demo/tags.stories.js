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
  title: 'Components/Tags'
};

const toClassName = (theme, base, size = false, color = false) => {
  let retVal = theme.colors.base === 'dark' ? `${base} c-tag--dark` : base;

  if (size) {
    retVal += ` ${size}`;
  }

  if (color) {
    retVal += ` ${color}`;
  }

  return retVal;
};

const toClassSelector = (theme, base, size = false, color = false, hasAvatar = false) => {
  let retVal = theme.colors.base === 'dark' ? `${base}.c-tag--dark` : base;

  if (size) {
    retVal += `.${size}`;
  }

  if (color) {
    retVal += `.${color}`;
  }

  if (hasAvatar) {
    retVal += ' .c-tag__avatar';
  }

  return retVal;
};

const Avatar = () => (
  <svg
    className="c-tag__avatar bg-grey-700 text-white"
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    focusable="false"
    viewBox="0 0 26 26"
  >
    <path
      fill="currentColor"
      d="M13 16.627a3.625 3.625 0 0 1-3.63-3.622A3.633 3.633 0 0 1 13 9.373a3.633 3.633 0 0 1 3.63 3.632A3.625 3.625 0 0 1 13 16.627m8.295-4.902h-.006a2.116 2.116 0 0 1-1.955-1.307l-.031-.075a2.117 2.117 0 0 1 .459-2.306.693.693 0 0 0 0-.998l-.809-.809a.71.71 0 0 0-.997 0 2.106 2.106 0 0 1-2.295.457l-.08-.033a2.109 2.109 0 0 1-1.302-1.948.705.705 0 0 0-.705-.706h-1.148a.705.705 0 0 0-.705.706c0 .855-.514 1.628-1.306 1.95-.021.009-.043.017-.063.027a2.106 2.106 0 0 1-2.308-.453.72.72 0 0 0-1.006 0l-.81.81a.708.708 0 0 0 0 .997l.007.006a2.11 2.11 0 0 1 .454 2.305c-.01.022-.018.045-.028.066a2.103 2.103 0 0 1-1.95 1.311h-.006a.706.706 0 0 0-.705.706v1.138c0 .39.316.706.705.706h.002a2.1 2.1 0 0 1 1.949 1.306l.029.069a2.11 2.11 0 0 1-.452 2.31l-.004.003a.708.708 0 0 0 0 .998l.809.809a.72.72 0 0 0 1.006 0l.005-.005a2.106 2.106 0 0 1 2.307-.452l.059.024a2.104 2.104 0 0 1 1.306 1.95v.007c0 .395.32.706.705.706h1.148c.385 0 .705-.31.705-.706v-.007c0-.855.514-1.627 1.306-1.95l.059-.024a2.106 2.106 0 0 1 2.307.452l.005.005a.71.71 0 0 0 .997 0l.809-.81a.693.693 0 0 0 0-.997l-.004-.003a2.11 2.11 0 0 1-.452-2.31l.029-.069a2.102 2.102 0 0 1 1.948-1.306h.012a.706.706 0 0 0 .705-.706v-1.138a.706.706 0 0 0-.705-.706"
    />
  </svg>
);

export const Default = {
  render: ({ hasAvatar = false, color = false, size = false }) => {
    /* eslint-disable-next-line react-hooks/rules-of-hooks */
    const theme = useTheme();

    return (
      <Grid>
        <Grid.Row>
          <Grid.Col className="mt-5">
            <div className={toClassName(theme, 'c-tag', size, hasAvatar)}>
              {!!hasAvatar && <Avatar />}
              <span dir="ltr">{toClassSelector(theme, '.c-tag', size, color, hasAvatar)}</span>
            </div>
          </Grid.Col>
          <Grid.Col className="mt-5">
            <div className={toClassName(theme, 'c-tag c-tag--pill', size, color)}>
              {!!hasAvatar && <Avatar />}
              <span dir="ltr">
                {toClassSelector(theme, '.c-tag.c-tag--pill', size, color, hasAvatar)}
              </span>
            </div>
          </Grid.Col>
          <Grid.Col className="mt-5">
            <div className={toClassName(theme, 'c-tag c-tag--pill', size, color)}>
              <span>T</span>
            </div>
          </Grid.Col>
          <Grid.Col className="mt-5">
            <div className={toClassName(theme, 'c-tag c-tag--round', size, color)}>
              <span>{size === 'c-tag--lg' ? 100 : 8}</span>
            </div>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    );
  },
  name: 'Default',
  argTypes: {
    hasAvatar: {
      name: 'avatar',
      control: {
        type: 'boolean'
      }
    },
    size: {
      control: {
        type: 'inline-radio'
      },
      options: [undefined, 'c-tag--sm', 'c-tag--lg']
    },
    color: {
      control: {
        type: 'select'
      },
      options: [
        undefined,
        'c-tag--blue',
        'c-tag--green',
        'c-tag--grey',
        'c-tag--kale',
        'c-tag--red',
        'c-tag--yellow'
      ]
    }
  },
  decorators: [Story => <Story />]
};
