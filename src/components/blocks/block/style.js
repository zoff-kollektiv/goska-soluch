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

  .has-theme-red {
    background-color: ${colors.red};
  }

  .constraint {
    max-width: 800px;
  }
`;
