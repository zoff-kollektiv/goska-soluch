/* eslint-disable react/no-danger */

import React, { useState } from 'react';

import Headline from '../../headline';
import style from './style';

export default ({ index, title, body, excerpt, image, moreLabel }) => {
  const [{ isOpen }, setOpen] = useState({ isOpen: false });

  return (
    <article>
      <style jsx>{style}</style>
      <header className="excerpt">
        <div className="image">
          {image && image.childImageSharp && (
            <img
              src={image.childImageSharp.fluid.src}
              srcSet={image.childImageSharp.fluid.srcSet}
              sizes={image.childImageSharp.fluid.sizes}
              alt=""
              loading="lazy"
            />
          )}
        </div>
        <div className="content">
          <div className="index">{index}</div>
          <Headline level="2">{title}</Headline>
          <div
            className="excerpt-text"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>
      </header>

      <button
        className="toggle"
        type="button"
        onClick={() => setOpen({ isOpen: !isOpen })}
      >
        {moreLabel}
        {isOpen ? (
          <svg
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm231-113.9L103.5 277.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L256 226.9l101.6 101.6c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L273 142.1c-9.4-9.4-24.6-9.4-34 0z"
            />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <div
          className="richtext"
          dangerouslySetInnerHTML={{ __html: body.replace(excerpt, '') }}
        />
      )}
    </article>
  );
};
