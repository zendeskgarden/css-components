/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import '@zendeskgarden/css-grid';
import '@zendeskgarden/css-utilities';
import './index.css';
import { DEFAULT_THEME, ThemeProvider, getColor } from '@zendeskgarden/react-theming';
import React from 'react';
import { create } from '@storybook/theming/create';
import { createGlobalStyle } from 'styled-components';

const DARK_THEME = { ...DEFAULT_THEME, colors: { ...DEFAULT_THEME.colors, base: 'dark' } };
const DARK = getColor({ theme: DARK_THEME, variable: 'background.default' });
const LIGHT = getColor({ theme: DEFAULT_THEME, variable: 'background.default' });

export const parameters = {
  backgrounds: {
    grid: { disable: true },
    values: [
      { name: 'light', value: LIGHT },
      { name: 'dark', value: DARK }
    ]
  },
  controls: { hideNoControlsWarning: true },
  docs: {
    theme: create({
      base: DEFAULT_THEME.colors.base
    })
  },
  options: {
    storySort: {
      order: ['README']
    }
  }
};

const GlobalPreviewStyling = createGlobalStyle`
  html {
    background-color: ${p => getColor({ theme: p.theme, variable: 'background.default' })};
    color: ${p => getColor({ theme: p.theme, variable: 'foreground.default' })};
  }
`;

export const decorators = [
  (story, context) => {
    if (context.globals.bedrock === 'enabled') {
      document.querySelector('link[href="index.css"]').removeAttribute('disabled');
    } else {
      document.querySelector('link[href="index.css"]').setAttribute('disabled', true);
    }

    const colors = {
      ...DEFAULT_THEME.colors,
      primaryHue: context.globals.primaryHue,
      variables: {
        ...DEFAULT_THEME.colors.variables,
        dark: context.args['colors.dark'],
        light: context.args['colors.light']
      }
    };

    if (
      context.globals.backgrounds && context.globals.backgrounds.value !== 'transparent'
        ? context.globals.backgrounds.value === DARK
        : context.parameters.backgrounds.default === 'dark'
    ) {
      colors.base = 'dark';
    }

    const theme = { ...DEFAULT_THEME, colors };

    return (
      <ThemeProvider theme={theme}>
        <GlobalPreviewStyling />
        {story()}
      </ThemeProvider>
    );
  }
];

export const globalTypes = {
  bedrock: {
    name: 'bedrock',
    description: 'CSS Bedrock',
    defaultValue: 'enabled',
    toolbar: {
      icon: 'link',
      items: [
        { value: 'enabled', title: 'Bedrock enabled' },
        { value: 'disabled', title: 'Bedrock disabled' }
      ]
    }
  }
};
