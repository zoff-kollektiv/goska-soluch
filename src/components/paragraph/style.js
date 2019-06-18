import css from 'styled-jsx/css';

import { fonts, mq } from '../../token';

export default css`
  p {
    font-family: ${fonts.questrial.family};
    font-size: 1.15rem;
    line-height: 1.375;
  }

  @media ${mq.tablet} {
    p {
      font-size: 1.4rem;
      line-height: 1.5;
    }
  }
`;
