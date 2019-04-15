import css from 'styled-jsx/css';

import { colors, mq } from '../../../token';

export default css`
  section {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
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
    flex-direction: column;
    max-width: 800px;
  }

  @media ${mq.tablet} {
    .constraint {
      flex-direction: row;
    }
  }
`;
