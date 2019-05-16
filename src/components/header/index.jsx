import React from 'react';

import style from './style';

export default ({ title }) => (
  <header>
    <style jsx>{style}</style>
    <h1 className="title">
      Goska Soluch
      <br />
      {title}
    </h1>
  </header>
);
