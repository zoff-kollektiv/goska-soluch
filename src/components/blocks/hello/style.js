import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { fonts } from '../../../token';

export default css`
  .text-container {
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    width: 50%;
  }

  .text-container a {
    justify-self: center;
    margin-left: auto;
    margin-right: auto;
  }

  .navigation {
    flex: 0 0 auto;
    max-width: 50%;
  }

  .navigation-list {
    counter-reset: navigation;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
  }

  .navigation-list-item {
    counter-increment: navigation;
    display: flex;
    flex: 0 1 auto;
    flex-direction: column;
    padding-left: 3rem;
    padding-top: 1rem;
    text-align: center;
    width: 50%;
  }

  .navigation-list-item:nth-child(2) {
    margin-top: -2rem;
  }

  .navigation-item::before {
    content: counter(navigation) ' ';
  }

  a {
    color: currentColor;
    font-family: ${fonts.questrial.family};
    font-size: 1.125rem;
  }

  a:hover,
  a:focus {
    opacity: 0.6;
    text-decoration: none;
  }
`;

export const pictureStyle = css.resolve`
  picture {
    height: auto;
    width: 100%;
  }
`;

export const imageStyle = css.resolve`
  img {
    height: auto;
    width: 100%;
  }
`;
