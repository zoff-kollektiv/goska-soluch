import css from 'styled-jsx/css';

import { colors, mq } from '../../../token';

export default css`
  section {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    padding: 1.5rem 1.5rem;
  }

  @media ${mq.tablet} {
    section {
      padding: 3.5rem 0;
    }
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
    max-width: 920px;
  }

  @media ${mq.tablet} {
    .constraint {
      flex-direction: row;
    }
  }
`;
