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
      <div className="mb-5">
        <a href="#0">a</a>
      </div>
      <div className="mb-5">
        <div>
          <b>b</b>
        </div>
        <div>
          <em>em</em>
        </div>
        <div>
          <ins>ins</ins>
        </div>
        <div>
          <i>i</i>
        </div>
        <div>
          <strong>strong</strong>
        </div>
        <div>
          <u>u</u>
        </div>
      </div>
      <hr className="mb-5" />
      <div className="mb-5">
        <button type="button">button</button>
      </div>
      <div className="mb-5">
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
      </div>
      <div className="mb-5">
        <ul className="mb-3">
          <li>ul</li>
        </ul>
        <ol className="mb-3">
          <li>ol</li>
        </ol>
        <dl className="mb-3">
          <li>dl</li>
          <li>dl</li>
        </dl>
        <dd className="mb-3">
          <li>dd</li>
          <li>dd</li>
        </dd>
      </div>
      <div className="mb-5">
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
