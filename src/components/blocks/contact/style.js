import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { fonts, mq } from '../../../token';

export default css`
  .text-container {
    text-align: center;
  }

  .telephone,
  .email {
    color: currentColor;
    display: block;
    font-family: ${fonts.questrial.family};
    font-size: 1rem;
    line-height: 1.2;
    text-align: center;
    text-decoration: none;
  }

  @media ${mq.tablet} {
    .telephone,
    .email {
      font-size: 3rem;
    }
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
