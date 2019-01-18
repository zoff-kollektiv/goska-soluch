import css from 'styled-jsx/css';

import { colors, fonts } from '../../token';

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
    font-size: 1.125rem;
    margin: 0 auto;
    text-align: center;
  }
`;
