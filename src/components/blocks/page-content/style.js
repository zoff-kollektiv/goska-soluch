import css from 'styled-jsx/css';
import { fonts, mq } from '../../../token';

export default css`
  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .excerpt {
    display: flex;
    flex-direction: column;
  }

  @media ${mq.tablet} {
    .excerpt {
      flex-direction: row;
    }
  }

  .index {
    font-family: ${fonts.questrial.family};
    font-size: 4.25rem;
    line-height: 1.2;
  }

  @media ${mq.tablet} {
    .index {
      font-size: 8rem;
      margin-bottom: 0;
    }
  }

  @media ${mq.desktop} {
    .index {
      font-size: 12.5rem;
    }
  }

  .image {
    align-items: flex-start;
    display: flex;
    margin-bottom: 1.5rem;
    width: 100%;
  }

  @media ${mq.tablet} {
    .image {
      margin-bottom: 0;
      margin-top: 2.5rem;
      width: 40%;
    }
  }

  .image img {
    width: 95%;
  }

  .content {
    flex: 1;
  }

  @media ${mq.tablet} {
    .content {
      margin-left: 1rem;
    }
  }

  @media ${mq.desktop} {
    .content {
      margin-left: 1.5rem;
    }
  }

  .excerpt-text,
  .richtext {
    display: flex;
    flex-direction: column;
    font-family: ${fonts.questrial.family};
    font-size: 1.15rem;
    line-height: 1.375;
    width: 100%;
  }

  @media ${mq.tablet} {
    .excerpt-text,
    .richtext {
      font-size: 1.25rem;
      line-height: 1.5;
    }
  }

  @media ${mq.desktop} {
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

  :global(.excerpt-text > p) {
    margin: 0;
    display: block;
  }

  :global(.excerpt-text a) {
    text-decoration: underline;
    color: black;
  }

  :global(.excerpt-text a:hover) {
    text-decoration: none;
    color: black;
  }

  :global(.richtext > h2:first-child) {
    text-align: center;
  }

  :global(.richtext > h2:first-child) {
    text-align: center;
  }

  :global(.richtext > *:first-child) {
    flex: 1 0 100%;
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
    margin-top: 1.5rem;
  }

  .toggle:hover,
  .toggle:focus {
    cursor: pointer;
    text-decoration: underline;
  }

  .toggle svg {
    height: 2.5rem;
    margin-top: 0.5rem;
    width: 2.5rem;
  }

  @media ${mq.tablet} {
    .toggle svg {
      height: 3.5rem;
      margin-top: 1rem;
      width: 3.5rem;
    }
  }
`;
