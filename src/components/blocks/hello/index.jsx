import React from 'react';

import Block from '../block';
import Headline from '../../headline';
import Paragraph from '../../paragraph';

import style from './style';

export default ({ frontmatter: { title }, intro }) => (
  <Block theme="red">
    <style jsx>{style}</style>

    <div className="text-container">
      <Headline level="2">{title}</Headline>
      <Paragraph>{intro}</Paragraph>
    </div>
  </Block>
);
