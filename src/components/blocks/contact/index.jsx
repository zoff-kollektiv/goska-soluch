import React from 'react';

import Block from '../block';
import Headline from '../../headline';
import Paragraph from '../../paragraph';

import style, { introStyles } from './style';

export default ({
  frontmatter: { theme, title, email, telephone },
  intro,
  ...attrs
}) => (
  <Block theme={theme} {...attrs}>
    <style jsx>{style}</style>
    {introStyles.styles}

    <div className="text-container">
      <Headline level="2">{title}</Headline>
      <Paragraph className={introStyles.className}>{intro}</Paragraph>

      {telephone && (
        <a href={`tel:${telephone}`} className="telephone">
          {telephone}
        </a>
      )}

      {email && (
        <a href={`mailto:${email}`} className="email">
          {email}
        </a>
      )}
    </div>
  </Block>
);
