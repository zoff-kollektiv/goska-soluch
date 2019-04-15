import css from 'styled-jsx/css';

import { fonts, mq } from '../../../token';

export default css`
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
`;
