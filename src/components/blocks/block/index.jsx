import React from 'react';

import style from './style';

export default ({ theme = '', children }) => (
  <section className={`has-theme-${theme}`}>
    <style jsx>{style}</style>

    <div className="constraint">{children}</div>
  </section>
);
