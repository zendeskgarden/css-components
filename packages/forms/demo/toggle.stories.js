/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import '../dist/checkbox.css';
import React from 'react';

export default {
  title: 'Components/Forms/Toggle'
};

export const Types = {
  render: ({ hasHint, hasMessage, state, validation }) => (
    <div className="container">
      <div className="row">
        <div className="col u-mt">
          <div className="c-chk">
            <input className="c-chk__input" id="checkbox" type="checkbox" />
            <label className={`c-chk__label ${state && state.join(' ')}`} htmlFor="checkbox">
              .c-chk__label
            </label>
            {!!hasHint && <span className="c-chk__hint">.c-chk__hint</span>}
            {!!hasMessage && (
              <small className={`c-chk__message c-chk__message--${validation}`}>
                .c-chk__message
              </small>
            )}
          </div>
        </div>
        <div className="col u-mt">
          <div className="c-chk">
            <input className="c-chk__input" id="toggle" type="checkbox" />
            <label
              className={`c-chk__label c-chk__label--toggle ${state && state.join(' ')}`}
              htmlFor="toggle"
            >
              .c-chk__label.c-chk__label--toggle
            </label>
            {!!hasHint && (
              <span className="c-chk__hint c-chk__hint--toggle">
                .c-chk__hint.c-chk__hint--toggle
              </span>
            )}
            {!!hasMessage && (
              <small
                className={`c-chk__message c-chk__message--toggle c-chk__message--${validation}`}
              >
                .c-chk__message.c-chk__message--toggle
              </small>
            )}
          </div>
        </div>
        <div className="col u-mt">
          <div className="c-chk">
            <input className="c-chk__input" id="radio" type="radio" />
            <label
              className={`c-chk__label c-chk__label--radio ${state && state.join(' ')}`}
              htmlFor="radio"
            >
              .c-chk__label.c-chk__label--radio
            </label>
            {!!hasHint && <span className="c-chk__hint">.c-chk__hint</span>}
            {!!hasMessage && (
              <small className={`c-chk__message c-chk__message--${validation}`}>
                .c-chk__message
              </small>
            )}
          </div>
        </div>
      </div>
    </div>
  ),
  name: 'Types',
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
    state: {
      control: {
        type: 'inline-check'
      },
      options: ['is-checked', 'is-hovered', 'is-focused', 'is-active', 'is-disabled']
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

export const Groups = {
  render: () => (
    <div className="container">
      <div className="row">
        <div className="col u-mt">
          <legend className="c-txt__label">Checkbox group</legend>
          <div className="c-chk u-mb-xs">
            <input className="c-chk__input" id="chk-01" type="checkbox" />
            <label className="c-chk__label c-chk__label--regular" htmlFor="chk-01">
              .c-chk__label.c-chk__label--regular
            </label>
          </div>
          <div className="c-chk u-mb-xs">
            <input className="c-chk__input" id="chk-02" type="checkbox" />
            <label className="c-chk__label c-chk__label--regular" htmlFor="chk-02">
              .c-chk__label.c-chk__label--regular
            </label>
          </div>
          <div className="c-chk">
            <input className="c-chk__input" id="chk-03" type="checkbox" />
            <label className="c-chk__label c-chk__label--regular" htmlFor="chk-03">
              .c-chk__label.c-chk__label--regular
            </label>
          </div>
        </div>
        <div className="col u-mt">
          <legend className="c-txt__label">Radio group</legend>
          <div className="c-chk u-mb-xs">
            <input className="c-chk__input" id="rdo-01" name="rdo-0" type="radio" />
            <label
              className="c-chk__label c-chk__label--radio c-chk__label--regular"
              htmlFor="rdo-01"
            >
              .c-chk__label.c-chk__label--radio.c-chk__label--regular
            </label>
          </div>
          <div className="c-chk u-mb-xs">
            <input className="c-chk__input" id="rdo-02" name="rdo-0" type="radio" />
            <label
              className="c-chk__label c-chk__label--radio c-chk__label--regular"
              htmlFor="rdo-02"
            >
              .c-chk__label.c-chk__label--radio.c-chk__label--regular
            </label>
          </div>
          <div className="c-chk">
            <input className="c-chk__input" id="rdo-03" name="rdo-0" type="radio" />
            <label
              className="c-chk__label c-chk__label--radio c-chk__label--regular"
              htmlFor="rdo-03"
            >
              .c-chk__label.c-chk__label--radio.c-chk__label--regular
            </label>
          </div>
        </div>
      </div>
    </div>
  ),
  name: 'Groups'
};
