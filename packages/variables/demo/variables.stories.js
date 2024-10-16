/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import '../dist/index.css';
import { Grid } from '@zendeskgarden/react-grid';
import PropTypes from 'prop-types';
import React from 'react';
import { readableColor } from 'polished';
import { useTheme } from 'styled-components';
import variables from '../dist/module';

export default {
  title: 'Components/Variables'
};

const getForegroundColor = backgroundColor => {
  return readableColor(
    backgroundColor,
    variables.zdColorGrey1100,
    variables.zdColorWhite,
    false /* disable strict mode to prevent black */
  );
};

const toProperty = variable => {
  return `--${variable.replace(/(?<character>[A-Z]|\d+)/gu, '-$1').toLowerCase()}`;
};

const Color = ({ variable }) => {
  const property = toProperty(variable);
  const color = getForegroundColor(variables[variable]);

  return (
    <div
      className="p-1 rounded text-center truncate"
      dir="ltr"
      style={{ backgroundColor: `var(${property})`, color }}
    >
      {property}
    </div>
  );
};

Color.propTypes = {
  variable: PropTypes.string.isRequired
};

const Font = ({ variable }) => {
  const property = toProperty(variable);
  const style = {};

  if (variable.includes('FontFamily')) {
    style.fontFamily = `var(${property})`;
  } else if (variable.includes('FontSize')) {
    style.fontSize = `var(${property})`;
  } else if (variable.includes('FontWeight')) {
    style.fontWeight = `var(${property})`;
  }

  return (
    <div className="p-1 text-center truncate" dir="ltr" style={style}>
      {property}
    </div>
  );
};

Font.propTypes = {
  variable: PropTypes.string.isRequired
};

const LineHeight = ({ variable }) => {
  const property = toProperty(variable);
  const lineHeight = `var(${property})`;

  return (
    <div className="bg-grey-300 p-2 rounded text-center truncate">
      <span
        className="bg-white border border-grey-600 border-solid inline-block p-1 rounded text-grey-900"
        dir="ltr"
        style={{ lineHeight }}
      >
        {property}
      </span>
    </div>
  );
};

LineHeight.propTypes = {
  variable: PropTypes.string.isRequired
};

const Opacity = ({ variable }) => {
  const property = toProperty(variable);
  const backgroundColor = `rgba(0, 0, 0, var(${property}))`;
  const theme = useTheme();
  let color;

  if (theme.colors.base === 'dark') {
    color = variables.zdColorWhite;
  } else {
    color = variables[variable] >= 0.5 ? variables.zdColorWhite : variables.zdColorBlack;
  }

  return (
    <div className="p-1 rounded text-center truncate" dir="ltr" style={{ backgroundColor, color }}>
      {property}
    </div>
  );
};

Opacity.propTypes = {
  variable: PropTypes.string.isRequired
};

const Spacing = ({ variable }) => {
  const property = toProperty(variable);
  const padding = `var(${property})`;

  return (
    <div
      className="bg-grey-300 inline-block p-1 rounded text-center text-grey-900 truncate"
      style={{ padding }}
    >
      <span
        className="bg-white border border-grey-600 border-solid inline-block p-1 rounded text-grey-900"
        dir="ltr"
      >
        {property}
      </span>
    </div>
  );
};

Spacing.propTypes = {
  variable: PropTypes.string.isRequired
};

export const Default = {
  render: () => (
    <Grid>
      <Grid.Row>
        <h1 className="text-2xl my-8">Colors</h1>
      </Grid.Row>
      <Grid.Row>
        {Object.keys(variables)
          .filter(variable => variable.includes('Color'))
          .map(variable => (
            <Grid.Col key={variable} className="p-2" sm={3}>
              <Color variable={variable} />
            </Grid.Col>
          ))}
      </Grid.Row>
      <Grid.Row>
        <h1 className="text-2xl my-8">Typography</h1>
      </Grid.Row>
      <Grid.Row>
        {Object.keys(variables)
          .filter(variable => variable.includes('FontFamily'))
          .map(variable => (
            <Grid.Col key={variable} className="p-2" sm={6}>
              <Font variable={variable} />
            </Grid.Col>
          ))}
      </Grid.Row>
      <hr className="my-3" />
      <Grid.Row>
        {Object.keys(variables)
          .filter(variable => variable.includes('FontSize'))
          .map(variable => (
            <Grid.Col key={variable} className="p-2" sm={4}>
              <Font variable={variable} />
            </Grid.Col>
          ))}
      </Grid.Row>
      <hr className="my-3" />
      <Grid.Row>
        {Object.keys(variables)
          .filter(variable => variable.includes('FontWeight'))
          .map(variable => (
            <Grid.Col key={variable} className="p-2" sm={3}>
              <Font variable={variable} />
            </Grid.Col>
          ))}
      </Grid.Row>
      <hr className="my-3" />
      <Grid.Row alignItems="center">
        {Object.keys(variables)
          .filter(variable => variable.includes('LineHeight'))
          .map(variable => (
            <Grid.Col key={variable} className="p-2" sm={3}>
              <LineHeight variable={variable} />
            </Grid.Col>
          ))}
      </Grid.Row>
      <Grid.Row>
        <h1 className="text-2xl my-8">Opacity</h1>
      </Grid.Row>
      <Grid.Row>
        {Object.keys(variables)
          .filter(variable => variable.includes('Opacity'))
          .map(variable => (
            <Grid.Col key={variable} className="p-2" sm={3}>
              <Opacity variable={variable} />
            </Grid.Col>
          ))}
      </Grid.Row>
      <Grid.Row>
        <h1 className="text-2xl my-8">Spacing</h1>
      </Grid.Row>
      <Grid.Row alignItems="center">
        {Object.keys(variables)
          .filter(variable => variable.includes('Spacing'))
          .map(variable => (
            <Grid.Col key={variable} className="p-2" sm={3} textAlign="center">
              <Spacing variable={variable} />
            </Grid.Col>
          ))}
      </Grid.Row>
    </Grid>
  )
};
