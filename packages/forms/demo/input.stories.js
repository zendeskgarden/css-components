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
  title: 'Components/Forms/Input'
};

const Field = ({ children, size, validation, id, hasHint, hasMessage }) => {
  const theme = useTheme();

  return (
    <>
      <div className="mb-8 text-sm">
        <code dir="ltr">{toClassSelector(theme, '.c-field', size, validation)}</code>
      </div>
      <div className={toClassName(theme, 'c-field', size, validation)}>
        <label className="c-field__label" htmlFor={id}>
          <span dir="ltr">.c-field__label</span>
        </label>
        {!!hasHint && (
          <span className="c-field__hint">
            <span dir="ltr">.c-field__hint</span>
          </span>
        )}
        {children}
        {!!hasMessage && (
          <small className="c-field__message" role="alert">
            <span dir="ltr">.c-field__message</span>
          </small>
        )}
      </div>
    </>
  );
};

Field.propTypes = {
  children: PropTypes.node,
  size: PropTypes.array,
  validation: PropTypes.string,
  id: PropTypes.string,
  hasHint: PropTypes.bool,
  hasMessage: PropTypes.bool
};

export const Default = {
  render: ({ hasHint, hasMessage, size, validation, readonly, disabled }) => {
    /* eslint-disable-next-line react-hooks/rules-of-hooks */
    const theme = useTheme();

    return (
      <Grid dir={theme.rtl ? 'rtl' : 'ltr'}>
        <Grid.Row>
          <Grid.Col className="mt-5" sm={4}>
            <Field
              size={size}
              validation={validation}
              id="text"
              hasHint={hasHint}
              hasMessage={hasMessage}
            >
              <input
                className="c-field__input"
                disabled={disabled}
                id="text"
                placeholder=".c-field__input"
                readOnly={readonly}
                type="text"
              />
            </Field>
          </Grid.Col>
          <Grid.Col className="mt-5" sm={4}>
            <Field
              size={size}
              validation={validation}
              id="textarea"
              hasHint={hasHint}
              hasMessage={hasMessage}
            >
              <textarea
                className="c-field__input c-field__input--area"
                disabled={disabled}
                id="textarea"
                placeholder=".c-field__input.c-field__input--area"
                readOnly={readonly}
                rows="1"
              />
            </Field>
          </Grid.Col>
          <Grid.Col className="mt-5" sm={4}>
            <Field
              size={size}
              validation={validation}
              id="select"
              hasHint={hasHint}
              hasMessage={hasMessage}
            >
              <select
                className="c-field__input c-field__input--select"
                disabled={disabled}
                id="select"
              >
                <option>.c-field__input.c-field__input--select</option>
                <option>foo</option>
                <option>bar</option>
              </select>
            </Field>
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
    readonly: {
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    }
  },
  args: {
    hasHint: true,
    hasMessage: true
  },
  decorators: [Story => <Story />]
};

const Input = ({ size, validation, type, disabled, readonly }) => {
  const theme = useTheme();
  const id = `type-${type}`;

  return (
    <div className={toClassName(theme, 'c-field', size, validation)}>
      <label className="c-field__label" htmlFor={id}>
        {type}
      </label>
      <input
        className="c-field__input"
        disabled={disabled}
        id={id}
        placeholder="color"
        readOnly={readonly}
        required
        type={type}
      />
    </div>
  );
};

Input.propTypes = {
  size: PropTypes.array,
  validation: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool
};

export const Types = {
  render: ({ size, validation, readonly, disabled }) => {
    /* eslint-disable-next-line react-hooks/rules-of-hooks */
    const theme = useTheme();

    return (
      <form>
        <Grid dir={theme.rtl ? 'rtl' : 'ltr'}>
          <Grid.Row>
            <Grid.Col className="mt-5" sm={3}>
              <Input
                size={size}
                validation={validation}
                type="color"
                disabled={disabled}
                readonly={readonly}
              />
            </Grid.Col>
            <Grid.Col className="mt-5" sm={3}>
              <Input
                size={size}
                validation={validation}
                type="date"
                disabled={disabled}
                readonly={readonly}
              />
            </Grid.Col>
            <Grid.Col className="mt-5" sm={3}>
              <Input
                size={size}
                validation={validation}
                type="datetime-local"
                disabled={disabled}
                readonly={readonly}
              />
            </Grid.Col>
            <Grid.Col className="mt-5" sm={3}>
              <Input
                size={size}
                validation={validation}
                type="email"
                disabled={disabled}
                readonly={readonly}
              />
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col className="mt-5" sm={3}>
              <Input
                size={size}
                validation={validation}
                type="file"
                disabled={disabled}
                readonly={readonly}
              />
            </Grid.Col>
            <Grid.Col className="mt-5" sm={3}>
              <Input
                size={size}
                validation={validation}
                type="month"
                disabled={disabled}
                readonly={readonly}
              />
            </Grid.Col>
            <Grid.Col className="mt-5" sm={3}>
              <Input
                size={size}
                validation={validation}
                type="number"
                disabled={disabled}
                readonly={readonly}
              />
            </Grid.Col>
            <Grid.Col className="mt-5" sm={3}>
              <Input
                size={size}
                validation={validation}
                type="password"
                disabled={disabled}
                readonly={readonly}
              />
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col className="mt-5" sm={3}>
              <Input
                size={size}
                validation={validation}
                type="search"
                disabled={disabled}
                readonly={readonly}
              />
            </Grid.Col>
            <Grid.Col className="mt-5" sm={3}>
              <Input
                size={size}
                validation={validation}
                type="tel"
                disabled={disabled}
                readonly={readonly}
              />
            </Grid.Col>
            <Grid.Col className="mt-5" sm={3}>
              <Input
                size={size}
                validation={validation}
                type="time"
                disabled={disabled}
                readonly={readonly}
              />
            </Grid.Col>
            <Grid.Col className="mt-5">
              <Input
                size={size}
                validation={validation}
                type="url"
                disabled={disabled}
                readonly={readonly}
              />
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col className="mt-5" sm={3}>
              <Input
                size={size}
                validation={validation}
                type="week"
                disabled={disabled}
                readonly={readonly}
              />
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col className="mt-5">
              <button type="submit">Test</button>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </form>
    );
  },
  name: 'Types',
  argTypes: {
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
    readonly: {
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    }
  },
  decorators: [Story => <Story />]
};
