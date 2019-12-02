import { Link } from 'gatsby';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

import {
  absolute,
  aSelfCenter,
  backgroundAccentLight,
  bottom0,
  content,
  contentCenter,
  cover,
  f4,
  f6,
  flexWrap,
  hideVisually,
  itemsCenter,
  itemsStart,
  jSelfEnd,
  left0,
  ma0,
  mb1,
  mHorizontal,
  mra,
  noUnderline,
  pa0,
  pa2,
  py1,
  py2,
  relative,
  right0,
  sizes,
  transitionAll,
  w100,
  z5,
  zUnder,
} from './styleUtils';

// Animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
`;

// Header
const HeaderMain = styled.header`
  ${relative};

  background-color: var(--bg-dark);
  border-color: var(--primary);
  border-style: solid;
  border-width: 0 0 1rem 0;
  grid-column: 1/4;
  grid-row: 1/2;
  grid-template-columns: auto minmax(11.5rem, 73rem) 2rem auto;
  padding: 1rem 2rem;

  &::before {
    ${content};
    ${w100};
    ${zUnder};
    ${cover('top')};

    background-color: var(--primary-light);
    bottom: -2rem;
    min-height: 1rem;
  }

  a {
    &,
    &:hover,
    &:visited {
      ${f4};

      color: hsl(64, 32%, 96%);
    }
  }
`;

const HeaderInner = styled.div`
  grid-column: 2/3;
  grid-template-columns: repeat(auto-fit, 12rem);
`;

const HomeLink = styled(Link)`
  ${mra};
  ${py1};
  ${relative};

  grid-column: 1/2;
  width: 7.5rem;
`;

const Nav = styled.nav`
  ${itemsCenter};
  ${py1};

  max-height: 3.5rem;
  max-width: 10.5rem;
`;

const Sep = styled.span`
  color: var(--meta);
  line-height: 1.5;
`;

// Toggle
const Toggle = styled.button`
  ${absolute};
  ${right0};
  ${sizes('1.05rem')};

  cursor: pointer;
  background: none;
  border: none;
  grid-column: 3/4;
  margin: 0.35rem 0.25rem 0.25rem;
  outline: none;
  top: 1.85rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Name = styled.span`
  ${hideVisually};
`;

const Icon = styled.span`
  ${sizes('1.05rem')};

  min-width: 1.05rem;

  &::after,
  &::before {
    animation: ${fadeIn} 2s;
  }

  &::after {
    ${absolute};
    ${content};
    ${ma0};
    ${transitionAll};
    ${sizes('1.05rem', '1rem')};

    border-radius: 1rem;
    display: inherit;
    vertical-align: middle;
  }

  &::before {
    ${backgroundAccentLight};
    ${content};
    ${transitionAll};
    ${z5};
    ${cover('left')};
    ${sizes('1rem')};

    background: transparent;
    box-shadow: 0.3125rem 0.3125rem 0 0 var(--primary-light);
    border-radius: 100%;
    right: 1rem;
    transform: rotate(-45deg);
  }

  ${({ dark }) =>
    dark &&
    `
    &::before {
      background: var(--primary-light);
      box-shadow: unset;
      right: 0.5rem;
    }
  `};
`;

// Footer
const FooterMain = styled.footer`
  ${contentCenter};
  ${itemsStart};
  ${mHorizontal};
  ${pa2};
  ${relative};

  background-color: var(--bg-dark);
  border-color: var(--primary);
  border-style: solid;
  border-width: 1rem 0 0;
  grid-column: 1/4;
  grid-gap: 1em;
  grid-row: 3/4;
  grid-template-columns: 6.5em minmax(10.5em, 32em);
  grid-template-rows: min-content 2.5em;

  &::before {
    ${absolute};
    ${backgroundAccentLight};
    ${bottom0};
    ${content};
    ${left0};
    ${right0};
    ${w100};
    ${zUnder};

    top: -2rem;
    min-height: 1rem;
  }
`;

const FooterCopy = styled.section`
  ${mb1};

  max-width: 32rem;

  &,
  &:hover,
  &:visited {
    color: hsl(64, 32%, 96%);
  }
`;

const FootHead = styled.p`
  ${f4};
  ${ma0};
  ${mb1};

  font-weight: bold;
`;

const FootBody = styled.p`
  max-width: 32rem;
`;

const DL = styled.dl`
  ${aSelfCenter};
  ${itemsCenter};
  ${jSelfEnd};
  ${ma0};
  ${w100};

  grid-column: 2/3;
  grid-row: 2/3;
  max-width: 8rem;
  min-height: 1.5rem;
`;

const DT = styled.dt`
  ${hideVisually};
`;

const DD = styled.dd`
  ${ma0};
  ${sizes('1.5rem')};
`;

const SocialLink = styled.a`
  ${noUnderline};
  ${relative};

  min-height: 1.5rem;

  &,
  svg {
    ${sizes('1.5rem')};
  }

  svg {
    fill: #fff;
    transition: fill var(--duration) ease-in-out;
    vertical-align: middle;
  }

  &:hover {
    svg {
      fill: var(--primary-light);
    }
  }
`;

// Article
const ArticleMain = styled.article`
  padding: 1rem 0;
`;

const Permalink = styled(Link)`
  display: inline-block;
  margin-bottom: 0.75rem;

  > h2 {
    ${ma0};
    ${pa0};
  }
`;

const MetaWrap = styled.section`
  ${flexWrap};

  margin-bottom: 0.75rem;
`;

const Meta = styled.p`
  &,
  > *,
  a:visited {
    ${f6};
    ${ma0};

    color: var(--meta);
  }

  a:hover {
    color: var(--font);
  }
`;

// Layout
const Main = styled.main`
  ${py2};

  grid-column: 2/3;
  grid-row: 2/3;
  min-height: calc(100vh - 22rem);
`;

export {
  ArticleMain,
  DD,
  DL,
  DT,
  FootBody,
  FooterCopy,
  FooterMain,
  FootHead,
  HeaderInner,
  HeaderMain,
  HomeLink,
  Icon,
  Main,
  Meta,
  MetaWrap,
  Name,
  Nav,
  Permalink,
  Sep,
  SocialLink,
  Toggle,
};
