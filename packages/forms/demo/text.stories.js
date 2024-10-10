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
      <Grid>
        <Grid.Row>
          <Grid.Col className="mt-5">
            <div className="mb-8 text-sm">
              <code>{toClassSelector(theme, '.c-txt', size, validation)}</code>
            </div>
            <div className={toClassName(theme, 'c-txt', size, validation)}>
              <label className="c-txt__label" htmlFor="text">
                .c-txt__label
              </label>
              {!!hasHint && <span className="c-txt__hint">.c-txt__hint</span>}
              <input
                className="c-txt__input"
                disabled={disabled}
                id="text"
                placeholder=".c-txt__input"
                readOnly={readonly}
                type="text"
              />
              {!!hasMessage && <small className="c-txt__message">.c-txt__message</small>}
            </div>
          </Grid.Col>
          <Grid.Col className="mt-5">
            <div className="mb-8 text-sm">
              <code>{toClassSelector(theme, '.c-txt', size, validation)}</code>
            </div>
            <div className={toClassName(theme, 'c-txt', size, validation)}>
              <label className="c-txt__label" htmlFor="textarea">
                .c-txt__label
              </label>
              {!!hasHint && <span className="c-txt__hint">.c-txt__hint</span>}
              <textarea
                className="c-txt__input c-txt__input--area"
                disabled={disabled}
                id="textarea"
                placeholder=".c-txt__input.c-txt__input--area"
                readOnly={readonly}
                rows="1"
              />
              {!!hasMessage && <small className="c-txt__message">.c-txt__message</small>}
            </div>
          </Grid.Col>
          <Grid.Col className="mt-5">
            <div className="mb-8 text-sm">
              <code>{toClassSelector(theme, '.c-txt', size, validation)}</code>
            </div>
            <div className={toClassName(theme, 'c-txt', size, validation)}>
              <label className="c-txt__label" htmlFor="select">
                .c-txt__label
              </label>
              {!!hasHint && <span className="c-txt__hint">.c-txt__hint</span>}
              <select className="c-txt__input c-txt__input--select" disabled={disabled} id="select">
                <option>.c-txt__input.c-txt__input--select</option>
                <option>foo</option>
                <option>bar</option>
              </select>
              {!!hasMessage && <small className="c-txt__message">.c-txt__message</small>}
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
  render: () => (
    <form>
      <div className="container">
        <div className="row">
          <div className="col u-mt">
            <label className="c-txt__label" htmlFor="txt-type-color">
              Color
            </label>
            <input
              className="c-txt__input"
              id="txt-type-color"
              placeholder="color"
              required
              type="color"
            />
          </div>
          <div className="col u-mt">
            <label className="c-txt__label" htmlFor="txt-type-date">
              Date
            </label>
            <input
              className="c-txt__input c-txt__input--select"
              id="txt-type-date"
              placeholder="date"
              required
              type="date"
            />
          </div>
          <div className="col u-mt">
            <label className="c-txt__label" htmlFor="txt-type-datetime">
              Datetime-Local
            </label>
            <input
              className="c-txt__input c-txt__input--select"
              id="txt-type-datetime"
              placeholder="datetime-local"
              required
              type="datetime-local"
            />
          </div>
          <div className="col u-mt">
            <label className="c-txt__label" htmlFor="txt-type-email">
              Email
            </label>
            <input
              className="c-txt__input"
              id="txt-type-email"
              placeholder="email"
              required
              type="email"
            />
          </div>
        </div>
        <div className="row">
          <div className="col u-mt">
            <label className="c-txt__label" htmlFor="txt-type-file">
              File
            </label>
            <input
              className="c-txt__input"
              id="txt-type-file"
              placeholder="file"
              required
              type="file"
            />
          </div>
          <div className="col u-mt">
            <label className="c-txt__label" htmlFor="txt-type-month">
              Month
            </label>
            <input
              className="c-txt__input c-txt__input--select"
              id="txt-type-month"
              placeholder="month"
              required
              type="month"
            />
          </div>
          <div className="col u-mt">
            <label className="c-txt__label" htmlFor="txt-type-number">
              Number
            </label>
            <input
              className="c-txt__input"
              id="txt-type-number"
              placeholder="number"
              required
              type="number"
            />
          </div>
          <div className="col u-mt">
            <label className="c-txt__label" htmlFor="txt-type-password">
              Password
            </label>
            <input
              className="c-txt__input"
              id="txt-type-password"
              placeholder="password"
              required
              type="password"
            />
          </div>
        </div>
        <div className="row">
          <div className="col u-mt">
            <label className="c-txt__label" htmlFor="txt-type-search">
              Search
            </label>
            <input
              className="c-txt__input"
              id="txt-type-search"
              placeholder="search"
              required
              type="search"
            />
          </div>
          <div className="col u-mt">
            <label className="c-txt__label" htmlFor="txt-type-tel">
              Tel
            </label>
            <input
              className="c-txt__input"
              id="txt-type-tel"
              placeholder="tel"
              required
              type="tel"
            />
          </div>
          <div className="col u-mt">
            <label className="c-txt__label" htmlFor="txt-type-time">
              Time
            </label>
            <input
              className="c-txt__input"
              id="txt-type-time"
              placeholder="time"
              required
              type="time"
            />
          </div>
          <div className="col u-mt">
            <label className="c-txt__label" htmlFor="txt-type-url">
              URL
            </label>
            <input
              className="c-txt__input"
              id="txt-type-url"
              placeholder="url"
              required
              type="url"
            />
          </div>
        </div>
        <div className="row">
          <div className="col col-3 u-mt">
            <label className="c-txt__label" htmlFor="txt-type-week">
              Week
            </label>
            <input
              className="c-txt__input c-txt__input--select"
              id="txt-type-week"
              placeholder="week"
              required
              type="week"
            />
          </div>
        </div>
        <div className="row">
          <div className="col u-mt">
            <button type="submit">Test</button>
          </div>
        </div>
      </div>
    </form>
  ),
  name: 'Types'
};
