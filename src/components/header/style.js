import css from 'styled-jsx/css';

import { colors, fonts, mq } from '../../token';

export default css`
  header {
    background-color: ${colors.red};
    display: flex;
    flex-direction: row;
    padding-bottom: 1rem;
    padding-top: 1rem;
  }

  .title {
    align-self: center;
    font-family: ${fonts.questrial.family};
    font-size: 0.9rem;
    margin: 0 auto;
    text-align: center;
  }

  @media ${mq.tablet} {
    .title {
      font-size: 1.125rem;
    }
  }
`;
