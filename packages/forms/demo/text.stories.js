/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import '../dist/text.css';
import React from 'react';

export default {
  title: 'Components/Forms/Text'
};

export const Default = {
  /* <div className="col u-mt">
    <div className="c-txt">
      <label className={`c-txt__label ${isCompact && 'c-txt__label--sm'}`} htmlFor="media">
        .c-txt__label
      </label>
      {hasHint && (
        <span className={`c-txt__hint ${isCompact && 'c-txt__hint--sm'}`}>.c-txt__hint</span>
      )}
      <div
        className={`c-txt__input c-txt__input--media ${isCompact && 'c-txt__input--sm'} ${
          isBare && 'c-txt__input--bare'
        } c-txt__input--${validation} ${state && state.join(' ')}`}
      >
        <div className="c-txt__input--media__figure">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            focusable="false"
            viewBox="0 0 16 16"
          >
            <rect
              width="15"
              height="11"
              x=".5"
              y="2.5"
              fill="none"
              stroke="currentColor"
              rx=".5"
              ry=".5"
            ></rect>
            <path fill="currentColor" d="M.5 5h15v2H.5z"></path>
          </svg>
        </div>
        <input
          className="c-txt__input c-txt__input--bare c-txt__input--media__body"
          disabled={state && state.includes('is-disabled')}
          id="media"
          placeholder=".c-txt__input.c-txt__input--media"
          type="text"
        />
        <div className="c-txt__input--media__figure">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            focusable="false"
            viewBox="0 0 16 16"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              d="M4.5 2.5H2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5h-2.5m-6.95 2C4.25 2.42 5.883.5 8 .5s3.75 1.92 3.45 4h-6.9z"
            ></path>
          </svg>
        </div>
      </div>
      {hasMessage && (
        <small className={`c-txt__message c-txt__message--${validation}`}>
          .c-txt__message
        </small>
      )}
    </div>
  </div> */
  render: ({ hasHint, hasMessage, isBare, isCompact, state, validation }) => (
    <div className="container">
      <div className="row">
        <div className="col u-mt">
          <div className="c-txt">
            <label className={`c-txt__label ${isCompact && 'c-txt__label--sm'}`} htmlFor="text">
              .c-txt__label
            </label>
            {hasHint && (
              <span className={`c-txt__hint ${isCompact && 'c-txt__hint--sm'}`}>.c-txt__hint</span>
            )}
            <input
              className={`c-txt__input ${isCompact && 'c-txt__input--sm'} ${
                isBare && 'c-txt__input--bare'
              } c-txt__input--${validation} ${state && state.join(' ')}`}
              disabled={state && state.includes('is-disabled')}
              id="text"
              placeholder=".c-txt__input"
              type="text"
            />
            {hasMessage && (
              <small className={`c-txt__message c-txt__message--${validation}`}>
                .c-txt__message
              </small>
            )}
          </div>
        </div>
        <div className="col u-mt">
          <div className="c-txt u-mb-sm">
            <label className={`c-txt__label ${isCompact && 'c-txt__label--sm'}`} htmlFor="textarea">
              .c-txt__label
            </label>
            {hasHint && (
              <span className={`c-txt__hint ${isCompact && 'c-txt__hint--sm'}`}>.c-txt__hint</span>
            )}
            <textarea
              className={`c-txt__input c-txt__input--area is-resizable ${
                isCompact && 'c-txt__input--sm'
              } ${isBare && 'c-txt__input--bare'} c-txt__input--${validation} ${
                state && state.join(' ')
              }`}
              disabled={state && state.includes('is-disabled')}
              id="textarea"
              placeholder=".c-txt__input.c-txt__input--area"
              rows="1"
            />
            {hasMessage && (
              <small className={`c-txt__message c-txt__message--${validation}`}>
                .c-txt__message
              </small>
            )}
          </div>
        </div>
        <div className="col u-mt">
          <div className="c-txt">
            <label className={`c-txt__label ${isCompact && 'c-txt__label--sm'}`} htmlFor="select">
              .c-txt__label
            </label>
            {hasHint && (
              <span className={`c-txt__hint ${isCompact && 'c-txt__hint--sm'}`}>.c-txt__hint</span>
            )}
            <select
              className={`c-txt__input c-txt__input--select ${isCompact && 'c-txt__input--sm'} ${
                isBare && 'c-txt__input--bare'
              } c-txt__input--${validation} ${state && state.join(' ')}`}
              disabled={state && state.includes('is-disabled')}
              id="select"
            >
              <option>.c-txt__input.c-txt__input--select</option>
              <option>foo</option>
              <option>bar</option>
            </select>
            {hasMessage && (
              <small className={`c-txt__message c-txt__message--${validation}`}>
                .c-txt__message
              </small>
            )}
          </div>
        </div>
      </div>
    </div>
  ),
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
    isCompact: {
      name: 'compact',
      control: {
        type: 'boolean'
      }
    },
    state: {
      control: {
        type: 'inline-check'
      },
      options: ['is-hovered', 'is-focused', 'is-disabled']
    },
    validation: {
      control: {
        type: 'inline-radio'
      },
      options: [undefined, 'success', 'warning', 'error']
    }
  },
  args: {
    hasHint: true,
    hasMessage: true
  }
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
