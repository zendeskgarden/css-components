/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { create } from '@storybook/theming/create';
import '../packages/grid/dist/index.css';
import '../packages/utilities/dist/index.css';

export const decorators = [
  (Story, context) => {
    if (context.globals.bedrock === 'enabled') {
      document.querySelector('link[href$="bedrock/index.css"]').removeAttribute('disabled');
    } else {
      document.querySelector('link[href$="bedrock/index.css"]').setAttribute('disabled', true);
    }

    return Story();
  }
];

export const globalTypes = {
  bedrock: {
    name: 'bedrock',
    description: 'CSS Bedrock',
    defaultValue: 'disabled',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'disabled', title: 'Bedrock disabled' },
        { value: 'enabled', title: 'Bedrock enabled' }
      ]
    }
  }
};

export const parameters = {
  backgrounds: {
    default: DEFAULT_THEME.colors.base,
    grid: { disable: true }
  },
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
