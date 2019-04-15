import css from 'styled-jsx/css';

export default css`
  :global(*),
  :global(*::before),
  :global(*::after) {
    box-sizing: border-box;
  }

  :global(body) {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-display: swap;
    font-family: 'Questrial';
    font-style: normal;
    font-weight: 400;
    src: url(/fonts/questrial/questrial.woff2) format('woff2'),
      url(/fonts/questrial/questrial.woff) format('woff');
  }
`;
