/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import '../dist/index.css';
import { toClassName, toClassSelector } from './utils';
import { Grid } from '@zendeskgarden/react-grid';
import PropTypes from 'prop-types';
import React from 'react';
import { useTheme } from 'styled-components';

export default {
  title: 'Components/Forms/Toggle'
};

const Field = ({ children, size, id, validation, hasHint, hasMessage }) => {
  const theme = useTheme();

  return (
    <div className={toClassName(theme, 'c-field', size, validation)}>
      {children}
      <label className="c-field__label" htmlFor={id}>
        <span dir="ltr">.c-field__label</span>
      </label>
      {!!hasHint && (
        <span className="c-field__hint">
          <span dir="ltr">.c-field__hint</span>
        </span>
      )}
      {!!hasMessage && (
        <small className="c-field__message" role="alert">
          <span dir="ltr">.c-field__message</span>
        </small>
      )}
    </div>
  );
};

Field.propTypes = {
  children: PropTypes.node,
  size: PropTypes.array,
  id: PropTypes.string,
  validation: PropTypes.string,
  hasHint: PropTypes.bool,
  hasMessage: PropTypes.bool
};

export const Default = {
  render: ({ hasHint, hasMessage, size = [], validation, disabled }) => {
    /* eslint-disable-next-line react-hooks/rules-of-hooks */
    const theme = useTheme();

    return (
      <Grid dir={theme.rtl ? 'rtl' : 'ltr'}>
        <Grid.Row>
          <Grid.Col className="mt-5" sm={6}>
            <div className="mb-8 text-sm">
              <code dir="ltr">{toClassSelector(theme, '.c-field', size, validation)}</code>
            </div>
            <Field
              size={size}
              id="checkbox"
              validation={validation}
              hasHint={hasHint}
              hasMessage={hasMessage}
            >
              <input
                className="c-field__checkbox"
                disabled={disabled}
                id="checkbox"
                type="checkbox"
              />
            </Field>
          </Grid.Col>
          <Grid.Col className="mt-5" sm={6}>
            <div className="mb-8 text-sm">
              <code dir="ltr">{toClassSelector(theme, '.c-field', size, validation)}</code>
            </div>
            <Field id="radio-1">
              <input
                className="c-field__radio"
                disabled={disabled}
                id="radio-1"
                name="radio"
                type="radio"
              />
            </Field>
            <div className={size.length > 0 ? 'mt-1' : 'mt-2'}>
              <Field id="radio-2">
                <input
                  className="c-field__radio"
                  disabled={disabled}
                  id="radio-2"
                  name="radio"
                  type="radio"
                />
              </Field>
            </div>
            <div className={size.length > 0 ? 'mt-1' : 'mt-2'}>
              <Field
                size={size}
                id="radio-3"
                validation={validation}
                hasHint={hasHint}
                hasMessage={hasMessage}
              >
                <input
                  className="c-field__radio"
                  disabled={disabled}
                  id="radio-3"
                  name="radio"
                  type="radio"
                />
              </Field>
            </div>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    );
  },
  name: 'Default',
  argTypes: {
    hasHint: {
      name: 'hint',
      control: {
        type: 'boolean'
      }
    },
    hasMessage: {
      name: 'message',
      control: {
        type: 'boolean'
      }
    },
    size: {
      control: {
        type: 'inline-check'
      },
      options: ['c-field--compact']
    },
    validation: {
      control: {
        type: 'inline-radio'
      },
      options: [undefined, 'c-field--success', 'c-field--warning', 'c-field--error']
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    }
  },
  args: {
    hasMessage: true
  },
  decorators: [Story => <Story />]
};
