import css from 'styled-jsx/css';

import { fonts, mq } from '../../token';

export default css`
  p {
    font-family: ${fonts.questrial.family};
    font-size: 1rem;
    line-height: 1.375;
  }

  @media ${mq.tablet} {
    p {
      font-size: 1.5rem;
      line-height: 1.5;
    }
  }
`;
