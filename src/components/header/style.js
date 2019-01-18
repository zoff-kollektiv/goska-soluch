import css from 'styled-jsx/css';

import { colors } from '../../token';

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
    margin: 0 auto;
    text-align: center;
  }
`;
