/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import '../dist/range.css';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';

export default {
  title: 'Components/Forms/Range'
};

const DefaultComponent = ({
  hasHint,
  hasMessage,
  isCompact,
  max,
  min,
  state,
  step,
  validation
}) => {
  const ref = useRef();

  const toPercent = () => {
    const value = (ref.current && ref.current.value) || 50;

    // eslint-disable-next-line logical-assignment-operators,no-param-reassign
    min = min || 0;
    // eslint-disable-next-line no-param-reassign
    max = max && parseFloat(max) < parseFloat(min) ? 100 : max;

    return `${max ? (100 * (value - min)) / (max - min) : value}%`;
  };

  return (
    <div className="c-range">
      <label className={`c-range__label ${isCompact && 'c-range__label--sm'}`} htmlFor="range">
        .c-range__label
      </label>
      {!!hasHint && (
        <span className={`c-range__hint ${isCompact && 'c-range__hint--sm'}`}>.c-range__hint</span>
      )}
      <input
        className={`c-range__input ${isCompact && 'c-range__input--sm'} ${
          state && state.join(' ')
        }`}
        disabled={!!state && state.includes('is-disabled')}
        id="range"
        type="range"
        max={max}
        min={min}
        ref={ref}
        step={step}
        style={{
          backgroundSize: toPercent()
        }}
        onInput={(event) => {
          event.target.style.backgroundSize = toPercent();
        }}
      />
      {!!hasMessage && (
        <small className={`c-range__message c-range__message--${validation}`}>
          .c-range__message
        </small>
      )}
    </div>
  );
};

DefaultComponent.propTypes = {
  isCompact: PropTypes.bool,
  hasHint: PropTypes.bool,
  hasMessage: PropTypes.bool,
  max: PropTypes.number,
  min: PropTypes.number,
  state: PropTypes.string,
  step: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  validation: PropTypes.string
};

export const Default = {
  render: DefaultComponent,
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
    max: {
      control: {
        type: 'number'
      }
    },
    min: {
      control: {
        type: 'number'
      }
    },
    state: {
      control: {
        type: 'inline-check'
      },
      options: ['is-focused', 'is-active', 'is-disabled']
    },
    step: {
      control: {
        type: 'number'
      }
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
