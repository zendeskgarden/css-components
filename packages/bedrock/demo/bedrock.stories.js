/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';

export default {
  title: 'Components/Bedrock'
};

export const Bedrock = {
  render: () => (
    <div>
      <div className="u-mb">
        <a href="#0">a</a>
      </div>
      <div className="u-mb">
        <b>b</b>
        <em>em</em>
        <ins>ins</ins>
        <i>i</i>
        <strong>strong</strong>
        <u>u</u>
      </div>
      <div className="u-mb">
        <button type="button">button</button>
      </div>
      <div className="u-mb">
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
      </div>
      <div className="u-mb">
        <ul className="u-mb-sm">
          <li>ul</li>
        </ul>
        <ol className="u-mb-sm">
          <li>ol</li>
        </ol>
        <dl className="u-mb-sm">
          <li>dl</li>
          <li>dl</li>
        </dl>
        <dd className="u-mb-sm">
          <li>dd</li>
          <li>dd</li>
        </dd>
      </div>
      <div className="u-mb">
        <p>p</p>
        <blockquote>blockquote</blockquote>
        <pre>pre</pre>
        <code>code</code>
        <fieldset>fieldset</fieldset>
        <figure>figure</figure>
      </div>
    </div>
  ),
  name: 'Bedrock'
};
