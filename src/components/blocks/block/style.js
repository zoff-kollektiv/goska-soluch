import css from 'styled-jsx/css';

import { colors } from '../../../token';

export default css`
  section {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
  }

  .has-theme-blue {
    background-color: ${colors.blue};
  }

  .has-theme-red {
    background-color: ${colors.red};
  }

  .has-theme-yellow {
    background-color: ${colors.yellow};
  }

  .constraint {
    display: flex;
    flex-direction: row;
    max-width: 800px;
  }
`;
