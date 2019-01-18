import css from 'styled-jsx/css';

import { fonts } from '../../token';

export default css`
  .headline {
    font-family: ${fonts.questrial.family};
    margin-bottom: 0;
    margin-top: 0;
    text-align: center;
  }

  .has-level-2 {
    font-size: 3rem;
    line-height: 1.2;
  }
`;
