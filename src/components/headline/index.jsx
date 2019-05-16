import React from 'react';

import style from './style';

export default ({ level = 1, centered = false, children }) => {
  const Headline = `h${level}`;

  return (
    <Headline
      className={`headline has-level-${level} ${centered && 'is-centered'}`}
    >
      <style jsx>{style}</style>
      {children}
    </Headline>
  );
};
