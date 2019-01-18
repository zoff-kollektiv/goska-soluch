import React from 'react';

import Headline from '../../headline';
import Paragraph from '../../paragraph';

import style from './style';

export default ({ index, title, intro }) => (
  <>
    <style jsx>{style}</style>

    <div className="index">{index}</div>
    <div className="content">
      <Headline level="2">{title}</Headline>
      <Paragraph>{intro}</Paragraph>
    </div>
  </>
);
