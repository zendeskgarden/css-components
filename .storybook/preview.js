/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import '@zendeskgarden/css-grid';
import '@zendeskgarden/css-utilities';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { create } from '@storybook/theming/create';

export const decorators = [
  (story, context) => {
    if (context.globals.bedrock === 'enabled') {
      document.querySelector('link[href="index.css"]').removeAttribute('disabled');
    } else {
      document.querySelector('link[href="index.css"]').setAttribute('disabled', true);
    }

    /* eslint-disable-next-line n/global-require */
    require('focus-visible');

    return story();
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

export const parameters = {
  backgrounds: {
    default: DEFAULT_THEME.colors.base,
    grid: { disable: true }
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
