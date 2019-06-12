import React from 'react';

import Block from '../block';
import Headline from '../../headline';
import Paragraph from '../../paragraph';

import style, { imageStyle } from './style';

const findImageByName = (name, images) =>
  images.find(({ name: imageName }) => imageName === name);

const Picture = ({ childImageSharp: { fluid: attrs } }) => (
  <>
    {imageStyle.styles}
    <img
      src={attrs.src}
      srcSet={attrs.srcSet}
      sizes={attrs.sizes}
      className={imageStyle.className}
      alt=""
    />
  </>
);

export default ({ images, frontmatter: { theme, title }, intro }) => (
  <Block theme={theme}>
    <style jsx>{style}</style>

    <div className="text-container">
      <Headline level="2" centered>
        {title}
      </Headline>
      <Paragraph>{intro}</Paragraph>

      <a href="#kontakt">Kontakt</a>
    </div>

    <nav className="navigation">
      <ol className="navigation-list">
        <li className="navigation-list-item">
          <a href="#arbeitsweise">
            <Picture {...findImageByName('01-arbeitsweise', images)} />
            <span className="navigation-item">Arbeitsweise</span>
          </a>
        </li>

        <li className="navigation-list-item">
          <a href="#themen">
            <Picture {...findImageByName('02-themen', images)} />
            <span className="navigation-item">Themen</span>
          </a>
        </li>

        <li className="navigation-list-item">
          <a href="#angebot">
            <Picture {...findImageByName('03-angebot', images)} />
            <span className="navigation-item">Angebot</span>
          </a>
        </li>
      </ol>
    </nav>
  </Block>
);
