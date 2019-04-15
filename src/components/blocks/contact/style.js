import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { fonts } from '../../../token';

export default css`
  .telephone,
  .email {
    color: currentColor;
    display: block;
    font-family: ${fonts.questrial.family};
    font-size: 3rem;
    line-height: 1.2;
    text-align: center;
    text-decoration: none;
  }

  .telephone:hover,
  .email:hover,
  .telephone:focus,
  .email:focus {
    text-decoration: underline;
  }
`;

export const introStyles = css.resolve`
  p {
    margin-bottom: 3rem;
  }
`;
