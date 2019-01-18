import React from 'react';

import style from './style';

export default ({ children }) => (
  <p>
    <style jsx>{style}</style>
    {children}
  </p>
);
