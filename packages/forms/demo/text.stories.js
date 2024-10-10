/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import '../dist/text.css';
import { Grid } from '@zendeskgarden/react-grid';
import React from 'react';
import { useTheme } from 'styled-components';

export default {
  title: 'Components/Forms/Text'
};

const toClassName = (theme, base, size = [], validation = undefined) => {
  let retVal = theme.colors.base === 'dark' ? `${base} c-txt--dark` : base;

  if (size.length > 0) {
    retVal += ` ${size.join(' ')}`;
  }

  if (validation) {
    retVal += ` ${validation}`;
  }

  return retVal;
};

const toClassSelector = (theme, base, size = [], validation = undefined) => {
  let retVal = theme.colors.base === 'dark' ? `${base}.c-txt--dark` : base;

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
              <code dir="ltr">{toClassSelector(theme, '.c-txt', size, validation)}</code>
            </div>
            <div className={toClassName(theme, 'c-txt', size, validation)}>
              <label className="c-txt__label" htmlFor="text">
                <span dir="ltr">.c-txt__label</span>
              </label>
              {!!hasHint && (
                <span className="c-txt__hint">
                  <span dir="ltr">.c-txt__hint</span>
                </span>
              )}
              <input
                className="c-txt__input"
                disabled={disabled}
                id="text"
                placeholder=".c-txt__input"
                readOnly={readonly}
                type="text"
              />
              {!!hasMessage && (
                <small className="c-txt__message">
                  <span dir="ltr">.c-txt__message</span>
                </small>
              )}
            </div>
          </Grid.Col>
          <Grid.Col className="mt-5">
            <div className="mb-8 text-sm">
              <code dir="ltr">{toClassSelector(theme, '.c-txt', size, validation)}</code>
            </div>
            <div className={toClassName(theme, 'c-txt', size, validation)}>
              <label className="c-txt__label" htmlFor="textarea">
                <span dir="ltr">.c-txt__label</span>
              </label>
              {!!hasHint && (
                <span className="c-txt__hint">
                  <span dir="ltr">.c-txt__hint</span>
                </span>
              )}
              <textarea
                className="c-txt__input c-txt__input--area"
                disabled={disabled}
                id="textarea"
                placeholder=".c-txt__input.c-txt__input--area"
                readOnly={readonly}
                rows="1"
              />
              {!!hasMessage && (
                <small className="c-txt__message">
                  <span dir="ltr">.c-txt__message</span>
                </small>
              )}
            </div>
          </Grid.Col>
          <Grid.Col className="mt-5">
            <div className="mb-8 text-sm">
              <code>{toClassSelector(theme, '.c-txt', size, validation)}</code>
            </div>
            <div className={toClassName(theme, 'c-txt', size, validation)}>
              <label className="c-txt__label" htmlFor="select">
                <span dir="ltr">.c-txt__label</span>
              </label>
              {!!hasHint && (
                <span className="c-txt__hint">
                  <span dir="ltr">.c-txt__hint</span>
                </span>
              )}
              <select className="c-txt__input c-txt__input--select" disabled={disabled} id="select">
                <option>.c-txt__input.c-txt__input--select</option>
                <option>foo</option>
                <option>bar</option>
              </select>
              {!!hasMessage && (
                <small className="c-txt__message">
                  <span dir="ltr">.c-txt__message</span>
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
      options: ['c-txt--compact']
    },
    validation: {
      control: {
        type: 'inline-radio'
      },
      options: [undefined, 'c-txt--success', 'c-txt--warning', 'c-txt--error']
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
              <div className={toClassName(theme, 'c-txt', size, validation)}>
                <label className="c-txt__label" htmlFor="txt-type-color">
                  Color
                </label>
                <input
                  className="c-txt__input"
                  disabled={disabled}
                  id="txt-type-color"
                  placeholder="color"
                  readOnly={readonly}
                  required
                  type="color"
                />
              </div>
            </Grid.Col>
            <Grid.Col className="u-mt">
              <div className={toClassName(theme, 'c-txt', size, validation)}>
                <label className="c-txt__label" htmlFor="txt-type-date">
                  Date
                </label>
                <input
                  className="c-txt__input"
                  disabled={disabled}
                  id="txt-type-date"
                  placeholder="date"
                  readOnly={readonly}
                  required
                  type="date"
                />
              </div>
            </Grid.Col>
            <Grid.Col className="u-mt">
              <div className={toClassName(theme, 'c-txt', size, validation)}>
                <label className="c-txt__label" htmlFor="txt-type-datetime">
                  Datetime-Local
                </label>
                <input
                  className="c-txt__input"
                  disabled={disabled}
                  id="txt-type-datetime"
                  placeholder="datetime-local"
                  readOnly={readonly}
                  required
                  type="datetime-local"
                />
              </div>
            </Grid.Col>
            <Grid.Col className="u-mt">
              <div className={toClassName(theme, 'c-txt', size, validation)}>
                <label className="c-txt__label" htmlFor="txt-type-email">
                  Email
                </label>
                <input
                  className="c-txt__input"
                  disabled={disabled}
                  id="txt-type-email"
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
              <div className={toClassName(theme, 'c-txt', size, validation)}>
                <label className="c-txt__label" htmlFor="txt-type-file">
                  File
                </label>
                <input
                  className="c-txt__input"
                  disabled={disabled}
                  id="txt-type-file"
                  placeholder="file"
                  readOnly={readonly}
                  required
                  type="file"
                />
              </div>
            </Grid.Col>
            <Grid.Col className="u-mt">
              <div className={toClassName(theme, 'c-txt', size, validation)}>
                <label className="c-txt__label" htmlFor="txt-type-month">
                  Month
                </label>
                <input
                  className="c-txt__input"
                  disabled={disabled}
                  id="txt-type-month"
                  placeholder="month"
                  readOnly={readonly}
                  required
                  type="month"
                />
              </div>
            </Grid.Col>
            <Grid.Col className="u-mt">
              <div className={toClassName(theme, 'c-txt', size, validation)}>
                <label className="c-txt__label" htmlFor="txt-type-number">
                  Number
                </label>
                <input
                  className="c-txt__input"
                  disabled={disabled}
                  id="txt-type-number"
                  placeholder="number"
                  readOnly={readonly}
                  required
                  type="number"
                />
              </div>
            </Grid.Col>
            <Grid.Col className="u-mt">
              <div className={toClassName(theme, 'c-txt', size, validation)}>
                <label className="c-txt__label" htmlFor="txt-type-password">
                  Password
                </label>
                <input
                  className="c-txt__input"
                  disabled={disabled}
                  id="txt-type-password"
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
              <div className={toClassName(theme, 'c-txt', size, validation)}>
                <label className="c-txt__label" htmlFor="txt-type-search">
                  Search
                </label>
                <input
                  className="c-txt__input"
                  disabled={disabled}
                  id="txt-type-search"
                  placeholder="search"
                  readOnly={readonly}
                  required
                  type="search"
                />
              </div>
            </Grid.Col>
            <Grid.Col className="u-mt">
              <div className={toClassName(theme, 'c-txt', size, validation)}>
                <label className="c-txt__label" htmlFor="txt-type-tel">
                  Tel
                </label>
                <input
                  className="c-txt__input"
                  disabled={disabled}
                  id="txt-type-tel"
                  placeholder="tel"
                  readOnly={readonly}
                  required
                  type="tel"
                />
              </div>
            </Grid.Col>
            <Grid.Col className="u-mt">
              <div className={toClassName(theme, 'c-txt', size, validation)}>
                <label className="c-txt__label" htmlFor="txt-type-time">
                  Time
                </label>
                <input
                  className="c-txt__input"
                  disabled={disabled}
                  id="txt-type-time"
                  placeholder="time"
                  readOnly={readonly}
                  required
                  type="time"
                />
              </div>
            </Grid.Col>
            <Grid.Col className="u-mt">
              <div className={toClassName(theme, 'c-txt', size, validation)}>
                <label className="c-txt__label" htmlFor="txt-type-url">
                  URL
                </label>
                <input
                  className="c-txt__input"
                  disabled={disabled}
                  id="txt-type-url"
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
              <div className={toClassName(theme, 'c-txt', size, validation)}>
                <label className="c-txt__label" htmlFor="txt-type-week">
                  Week
                </label>
                <input
                  className="c-txt__input"
                  disabled={disabled}
                  id="txt-type-week"
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
      options: ['c-txt--compact']
    },
    validation: {
      control: {
        type: 'inline-radio'
      },
      options: [undefined, 'c-txt--success', 'c-txt--warning', 'c-txt--error']
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
