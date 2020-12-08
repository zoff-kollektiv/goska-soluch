/* eslint-disable react/no-danger */

import React from 'react';
import Headline from '../../headline';
import style from './style';

export default ({ title, excerpt }) => {
  return (
    <article>
      <style jsx>{style}</style>
      <div className="content">
        <Headline level="2">{title}</Headline>
        <div
          className="excerpt-text"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      </div>
    </article>
  );
};
