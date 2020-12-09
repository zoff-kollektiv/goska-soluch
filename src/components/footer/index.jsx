import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { fonts } from '../../token';
import style from './style';

const StyledLink = styled(props => <Link {...props} />)`
  color: currentColor;
  display: block;
  font-size: 1rem;
  line-height: 1.2;
  text-align: center;
  text-decoration: none;
  margin: 0 0.4rem;
  font-family: ${fonts.questrial.family};

  &:hover {
    text-decoration: underline;
  }
`;

export default ({ theme = '', children, ...attrs }) => (
  <section className={`has-theme-${theme}`} {...attrs}>
    <style jsx>{style}</style>

    <div className="constraint">
      <StyledLink to="/" className="nav-link">
        Home
      </StyledLink>
      <StyledLink to="/datenschutz" className="nav-link">
        Datenschutz
      </StyledLink>
      <StyledLink to="/impressum" className="nav-link">
        Impressum
      </StyledLink>
    </div>
  </section>
);
