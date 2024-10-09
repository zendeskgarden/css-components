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
  title: 'Components/Anchors'
};

const toClassName = (theme, base, style = []) => {
  let retVal = theme.colors.base === 'dark' ? `${base} c-anchor--dark` : base;

  if (style.length > 0) {
    retVal += ` ${style.join(' ')}`;
  }

  return retVal;
};

const toClassSelector = (theme, base, style = []) => {
  let retVal = theme.colors.base === 'dark' ? `${base}.c-anchor--dark` : base;

  if (style.length > 0) {
    retVal += `.${style.join('.')}`;
  }

  return retVal;
};

export const Types = {
  render: ({ style = false }) => {
    /* eslint-disable-next-line react-hooks/rules-of-hooks */
    const theme = useTheme();

    return (
      <Grid>
        <Grid.Row>
          <Grid.Col className="u-mt">
            <a href="#0" className={toClassName(theme, 'c-anchor', style)}>
              {toClassSelector(theme, '.c-anchor', style)}
            </a>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    );
  },
  name: 'Default',
  argTypes: {
    style: {
      control: {
        type: 'inline-check'
      },
      options: ['c-anchor--danger']
    }
  },
  decorators: [Story => <Story />]
};
