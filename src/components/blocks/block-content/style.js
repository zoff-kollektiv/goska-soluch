import css from 'styled-jsx/css';

import { fonts, mq } from '../../../token';

export default css`
  article {
    display: flex;
    flex-direction: column;
  }

  .excerpt {
    display: flex;
    flex-direction: row;
  }

  .index {
    font-family: ${fonts.questrial.family};
    font-size: 6.25rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  @media ${mq.tablet} {
    .index {
      font-size: 25rem;
      margin-bottom: 0;
      text-align: left;
      width: 40%;
    }
  }

  .content {
    flex: 1;
  }

  .excerpt-text,
  .richtext {
    display: flex;
    flex-direction: column;
    font-family: ${fonts.questrial.family};
    font-size: 1rem;
    line-height: 1.375;
    width: 100%;
  }

  @media ${mq.tablet} {
    .excerpt-text,
    .richtext {
      font-size: 1.5rem;
      line-height: 1.5;
    }
  }

  .richtext {
    margin-bottom: 10rem;
    margin-top: 2rem;
  }

  @media ${mq.tablet} {
    .richtext {
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 4rem;
    }
  }

  :global(.richtext > *:first-child) {
    flex: 1 0 100%;
    text-align: center;
    width: 100%;
  }

  :global(.richtext > *) {
    flex: 1 0 50%;
  }

  :global(.richtext > * + *) {
    padding-left: 2.5rem;
  }

  .toggle {
    align-items: center;
    appearance: none;
    background: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    font-family: ${fonts.questrial.family};
    font-size: 1rem;
    justify-self: center;
    line-height: 1.375;
    margin-left: auto;
    margin-right: auto;
  }

  .toggle:hover,
  .toggle:focus {
    cursor: pointer;
    text-decoration: underline;
  }

  .toggle svg {
    height: 3.5rem;
    margin-top: 1rem;
    width: 3.5rem;
  }
`;
