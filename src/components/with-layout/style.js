import css from 'styled-jsx/css';

export default css`
  :global(*),
  :global(*::before),
  :global(*::after) {
    box-sizing: border-box;
  }

  :global(body) {
    margin: 0;
    padding: 0;
  }
`;
