import React from 'react';

import style from './style';

export default ({ level = 1, children }) => {
  const Headline = `h${level}`;

  return (
    <Headline className={`headline has-level-${level}`}>
      <style jsx>{style}</style>
      {children}
    </Headline>
  );
};
