/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import '../dist/input.css';
import { Grid } from '@zendeskgarden/react-grid';
import React from 'react';
import { useTheme } from 'styled-components';

export default {
  title: 'Components/Forms/Input'
};

const toClassName = (theme, base, size = [], validation = undefined) => {
  let retVal = theme.colors.base === 'dark' ? `${base} c-field--dark` : base;

  if (size.length > 0) {
    retVal += ` ${size.join(' ')}`;
  }

  if (validation) {
    retVal += ` ${validation}`;
  }

  return retVal;
};

const toClassSelector = (theme, base, size = [], validation = undefined) => {
  let retVal = theme.colors.base === 'dark' ? `${base}.c-field--dark` : base;

  if (size.length > 0) {
    retVal += `.${size.join('.')}`;
  }

  if (validation) {
    retVal += `.${validation}`;
  }

  return retVal;
};

export const Default = {
  render: ({ hasHint, hasMessage, size, validation, readonly, disabled }) => {
    /* eslint-disable-next-line react-hooks/rules-of-hooks */
    const theme = useTheme();

    return (
      <Grid dir={theme.rtl ? 'rtl' : 'ltr'}>
        <Grid.Row>
          <Grid.Col className="mt-5">
            <div className="mb-8 text-sm">
              <code dir="ltr">{toClassSelector(theme, '.c-field', size, validation)}</code>
            </div>
            <div className={toClassName(theme, 'c-field', size, validation)}>
              <label className="c-field__label" htmlFor="text">
                <span dir="ltr">.c-field__label</span>
              </label>
              {!!hasHint && (
                <span className="c-field__hint">
                  <span dir="ltr">.c-field__hint</span>
                </span>
              )}
              <input
                className="c-field__input"
                disabled={disabled}
                id="text"
                placeholder=".c-field__input"
                readOnly={readonly}
                type="text"
              />
              {!!hasMessage && (
                <small className="c-field__message">
                  <span dir="ltr">.c-field__message</span>
                </small>
              )}
            </div>
          </Grid.Col>
          <Grid.Col className="mt-5">
            <div className="mb-8 text-sm">
              <code dir="ltr">{toClassSelector(theme, '.c-field', size, validation)}</code>
            </div>
            <div className={toClassName(theme, 'c-field', size, validation)}>
              <label className="c-field__label" htmlFor="textarea">
                <span dir="ltr">.c-field__label</span>
              </label>
              {!!hasHint && (
                <span className="c-field__hint">
                  <span dir="ltr">.c-field__hint</span>
                </span>
              )}
              <textarea
                className="c-field__input c-field__input--area"
                disabled={disabled}
                id="textarea"
                placeholder=".c-field__input.c-field__input--area"
                readOnly={readonly}
                rows="1"
              />
              {!!hasMessage && (
                <small className="c-field__message">
                  <span dir="ltr">.c-field__message</span>
                </small>
              )}
            </div>
          </Grid.Col>
          <Grid.Col className="mt-5">
            <div className="mb-8 text-sm">
              <code>{toClassSelector(theme, '.c-field', size, validation)}</code>
            </div>
            <div className={toClassName(theme, 'c-field', size, validation)}>
              <label className="c-field__label" htmlFor="select">
                <span dir="ltr">.c-field__label</span>
              </label>
              {!!hasHint && (
                <span className="c-field__hint">
                  <span dir="ltr">.c-field__hint</span>
                </span>
              )}
              <select
                className="c-field__input c-field__input--select"
                disabled={disabled}
                id="select"
              >
                <option>.c-field__input.c-field__input--select</option>
                <option>foo</option>
                <option>bar</option>
              </select>
              {!!hasMessage && (
                <small className="c-field__message">
                  <span dir="ltr">.c-field__message</span>
                </small>
              )}
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

export const Types = {
  render: ({ size, validation, readonly, disabled }) => {
    /* eslint-disable-next-line react-hooks/rules-of-hooks */
    const theme = useTheme();

    return (
      <form>
        <Grid dir={theme.rtl ? 'rtl' : 'ltr'}>
          <Grid.Row>
            <Grid.Col className="u-mt">
              <div className={toClassName(theme, 'c-field', size, validation)}>
                <label className="c-field__label" htmlFor="field-type-color">
                  Color
                </label>
                <input
                  className="c-field__input"
                  disabled={disabled}
                  id="field-type-color"
                  placeholder="color"
                  readOnly={readonly}
                  required
                  type="color"
                />
              </div>
            </Grid.Col>
            <Grid.Col className="u-mt">
              <div className={toClassName(theme, 'c-field', size, validation)}>
                <label className="c-field__label" htmlFor="field-type-date">
                  Date
                </label>
                <input
                  className="c-field__input"
                  disabled={disabled}
                  id="field-type-date"
                  placeholder="date"
                  readOnly={readonly}
                  required
                  type="date"
                />
              </div>
            </Grid.Col>
            <Grid.Col className="u-mt">
              <div className={toClassName(theme, 'c-field', size, validation)}>
                <label className="c-field__label" htmlFor="field-type-datetime">
                  Datetime-Local
                </label>
                <input
                  className="c-field__input"
                  disabled={disabled}
                  id="field-type-datetime"
                  placeholder="datetime-local"
                  readOnly={readonly}
                  required
                  type="datetime-local"
                />
              </div>
            </Grid.Col>
            <Grid.Col className="u-mt">
              <div className={toClassName(theme, 'c-field', size, validation)}>
                <label className="c-field__label" htmlFor="field-type-email">
                  Email
                </label>
                <input
                  className="c-field__input"
                  disabled={disabled}
                  id="field-type-email"
                  placeholder="email"
                  readOnly={readonly}
                  required
                  type="email"
                />
              </div>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col className="u-mt">
              <div className={toClassName(theme, 'c-field', size, validation)}>
                <label className="c-field__label" htmlFor="field-type-file">
                  File
                </label>
                <input
                  className="c-field__input"
                  disabled={disabled}
                  id="field-type-file"
                  placeholder="file"
                  readOnly={readonly}
                  required
                  type="file"
                />
              </div>
            </Grid.Col>
            <Grid.Col className="u-mt">
              <div className={toClassName(theme, 'c-field', size, validation)}>
                <label className="c-field__label" htmlFor="field-type-month">
                  Month
                </label>
                <input
                  className="c-field__input"
                  disabled={disabled}
                  id="field-type-month"
                  placeholder="month"
                  readOnly={readonly}
                  required
                  type="month"
                />
              </div>
            </Grid.Col>
            <Grid.Col className="u-mt">
              <div className={toClassName(theme, 'c-field', size, validation)}>
                <label className="c-field__label" htmlFor="field-type-number">
                  Number
                </label>
                <input
                  className="c-field__input"
                  disabled={disabled}
                  id="field-type-number"
                  placeholder="number"
                  readOnly={readonly}
                  required
                  type="number"
                />
              </div>
            </Grid.Col>
            <Grid.Col className="u-mt">
              <div className={toClassName(theme, 'c-field', size, validation)}>
                <label className="c-field__label" htmlFor="field-type-password">
                  Password
                </label>
                <input
                  className="c-field__input"
                  disabled={disabled}
                  id="field-type-password"
                  placeholder="password"
                  readOnly={readonly}
                  required
                  type="password"
                />
              </div>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col className="u-mt">
              <div className={toClassName(theme, 'c-field', size, validation)}>
                <label className="c-field__label" htmlFor="field-type-search">
                  Search
                </label>
                <input
                  className="c-field__input"
                  disabled={disabled}
                  id="field-type-search"
                  placeholder="search"
                  readOnly={readonly}
                  required
                  type="search"
                />
              </div>
            </Grid.Col>
            <Grid.Col className="u-mt">
              <div className={toClassName(theme, 'c-field', size, validation)}>
                <label className="c-field__label" htmlFor="field-type-tel">
                  Tel
                </label>
                <input
                  className="c-field__input"
                  disabled={disabled}
                  id="field-type-tel"
                  placeholder="tel"
                  readOnly={readonly}
                  required
                  type="tel"
                />
              </div>
            </Grid.Col>
            <Grid.Col className="u-mt">
              <div className={toClassName(theme, 'c-field', size, validation)}>
                <label className="c-field__label" htmlFor="field-type-time">
                  Time
                </label>
                <input
                  className="c-field__input"
                  disabled={disabled}
                  id="field-type-time"
                  placeholder="time"
                  readOnly={readonly}
                  required
                  type="time"
                />
              </div>
            </Grid.Col>
            <Grid.Col className="u-mt">
              <div className={toClassName(theme, 'c-field', size, validation)}>
                <label className="c-field__label" htmlFor="field-type-url">
                  URL
                </label>
                <input
                  className="c-field__input"
                  disabled={disabled}
                  id="field-type-url"
                  placeholder="url"
                  readOnly={readonly}
                  required
                  type="url"
                />
              </div>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col className="u-mt" sm={3}>
              <div className={toClassName(theme, 'c-field', size, validation)}>
                <label className="c-field__label" htmlFor="field-type-week">
                  Week
                </label>
                <input
                  className="c-field__input"
                  disabled={disabled}
                  id="field-type-week"
                  placeholder="week"
                  readOnly={readonly}
                  required
                  type="week"
                />
              </div>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col className="u-mt">
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
