import Helmet from 'react-helmet';
import React from 'react';

export default () => (
  <main>
    <Helmet>
      <title>Goska Soluch</title>
    </Helmet>

    <style jsx>{`
      *,
      *::after,
      *::before {
        box-sizing: border-box;
      }

      @font-face {
        font-display: swap;
        font-family: 'Questrial';
        font-style: normal;
        font-weight: 400;
        src: local('Questrial'), local('Questrial-Regular'),
          url(/fonts/questrial/questrial.woff2) format('woff2'),
          url(/fonts/questrial/questrial.woff) format('woff');
      }

      body {
        background-color: rgb(252, 71, 76);
        color: black;
        margin: 0;
        padding: 0;
      }

      main {
        align-items: center;
        display: flex;
        flex-direction: column;
        font-family: Questrial, sans-serif;
        font-size: 1.4rem;
        height: 100vh;
        justify-content: center;
        line-height: 1.4;
        width: 100%;
      }

      h1 {
        font-size: 3.5rem;
        line-height: 1.2;
        margin-bottom: 0.75rem;
        margin-top: 0;
        text-align: center;
      }

      a {
        color: currentColor;
        text-decoration: none;
      }

      a:hover,
      a:focus {
        text-decoration: underline;
      }
    `}</style>

    <h1>Goska Soluch</h1>
    <a href="mailto:goska.soluch@gmx.net">goska.soluch@gmx.net</a>
    <a href="tel:01633443868">+49 1633 443 868</a>
  </main>
);
