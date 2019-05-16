import css from 'styled-jsx/css';

import { fonts, mq } from '../../token';

export default css`
  .headline {
    font-family: ${fonts.questrial.family};
    margin-bottom: 0;
    margin-top: 0;
  }

  .has-level-2 {
    font-size: 1.625rem;
    line-height: 1.2;
  }

  @media ${mq.tablet} {
    .has-level-2 {
      font-size: 3rem;
    }
  }
`;
