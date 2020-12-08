import React from 'react';

import style from './style';

export default ({ theme = '', children, ...attrs }) => (
  <section className={`has-theme-${theme}`} {...attrs}>
    <style jsx>{style}</style>

    <div className="constraint">{children}</div>
  </section>
);
