import React from 'react';

import style from './style';

export default ({ title }) => (
  <header>
    <style jsx>{style}</style>
    <h1 className="title">{title}</h1>
  </header>
);
