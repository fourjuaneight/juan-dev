/* eslint-disable quotes */
// Styling
const backgroundAccent = `
  background-color: var(--primary);
`;

const backgroundAccentLight = `
  background-color: var(--primary-light);
`;

const backgroundNone = `
  background: none;
`;

const backgroundTransparent = `
  background: transparent;
`;

const borderCurved = `
  border-radius: 0.125rem;
`;

const borderRound = `
  border-radius: 50%;
`;

const content = `
  content: '';
`;

const meta = `
  &,
  &:visited {
    color: var(--meta);
  }
`;

// Type
const normal = `
  font-weight: 400;
`;

const bold = `
  font-weight: 700;
`;

const f1 = `
  font-size: 2.75rem;
`;

const f2 = `
  font-size: 2.25rem;
`;

const f3 = `
  font-size: 1.75rem;
`;

const f4 = `
  font-size: 1.25rem;
`;

const f5 = `
  font-size: 1rem;
`;

const f6 = `
  font-size: 0.875rem;
`;

const f7 = `
  font-size: 0.75rem;
`;

const tl = `
  text-align: left;
`;

const tr = `
  text-align: right;
`;

const tc = `
  text-align: center;
`;

const tj = `
  text-align: justify;
`;

const ttc = `
  text-transform: capitalize;
`;

const ttl = `
  text-transform: lowercase;
`;

const ttu = `
  text-transform: uppercase;
`;

const ttn = `
  text-transform: none;
`;

const strike = `
  text-decoration: line-through;
`;

const underline = `
  text-decoration: underline;
`;

const noUnderline = `
  text-decoration: none;
`;

// Layout
const db = `
  display: block;
`;

const dib = `
  display: inline-block;
`;

const dn = `
  display: none;
`;

const flex = `
  display: flex;
`;

const grid = `
  display: grid;
`;

const gridFlex = `
  display: flex;

  @supports (display:grid) {
   display: grid !important;
  }
`;

const overflowHidden = `
  overflow: hidden;
`;

const overflowXHidden = `
  overflow-x: hidden;
`;

const overflowYHidden = `
  overflow-y: hidden;
`;

const overflowAuto = `
  overflow: auto;
`;

const overflowXAuto = `
  overflow-x: auto;
`;

const overflowYAuto = `
  overflow-y: auto;
`;

// Flexbox
const flexColumn = `
  flex-direction: column;
`;

const flexRow = `
  flex-direction: row;
`;

const flexWrap = `
  flex-wrap: wrap;
`;

// Align
const itemsCenter = `
  align-items: center;
`;

const itemsEnd = `
  align-items: end;
`;

const itemsFlexEnd = `
  align-items: flex-end;
`;

const itemsFlexStart = `
  align-items: flex-start;
`;

const itemsStart = `
  align-items: start;
`;

const aSelfCenter = `
  align-self: center;
`;

const aSelfEnd = `
  align-self: end;
`;

const aSelfStart = `
  align-self: start;
`;

// Justify
const contentCenter = `
  justify-content: center;
`;

const contentEnd = `
  justify-content: end;
`;

const contentFlexEnd = `
  justify-content: flex-end;
`;

const contentFlexStart = `
  justify-content: flex-start;
`;

const contentAround = `
  justify-content: space-around;
`;

const contentBetween = `
  justify-content: space-between;
`;

const contentStart = `
  justify-content: start;
`;

const jSelfCenter = `
  justify-self: center;
`;

const jSelfEnd = `
  justify-self: end;
`;

const jSelfStart = `
  justify-self: start;
`;

// Position
const absolute = `
  position: absolute;
`;

const fixed = `
  position: fixed;
`;

const relative = `
  position: relative;
`;

const sticky = `
  position: sticky;
`;

const absoluteFill = `
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`;

const bottom0 = `
  bottom: 0;
`;

const left0 = `
  left: 0;
`;

const right0 = `
  right: 0;
`;

const top0 = `
  top: 0;
`;

const zUnder = `
  z-index: -1;
`;

const z1 = `
  z-index: 1;
`;

const z5 = `
  z-index: 5;
`;

const z10 = `
  z-index: 10;
`;

const z15 = `
  z-index: 15;
`;

const z20 = `
  z-index: 20;
`;

// Spacing
const mHorizontal = `
  margin: 0 auto;
`;

const mVertical = `
  margin: auto 0;
`;

const ma0 = `
  margin: 0;
`;

const ma1 = `
  margin: 1em;
`;

const ma2 = `
  margin: 2em;
`;

const maa = `
  margin: auto;
`;

const mb0 = `
  margin-bottom: 0;
`;

const mb1 = `
  margin-bottom: 1rem;
`;

const mb2 = `
  margin-bottom: 2rem;
`;

const mba = `
  margin-bottom: auto;
`;

const ml0 = `
  margin-left: 0;
`;

const ml1 = `
  margin-left: 1rem;
`;

const ml2 = `
  margin-left: 2rem;
`;

const mlA = `
  margin-left: auto;
`;

const mr0 = `
  margin-right: 0;
`;

const mr1 = `
  margin-right: 1em;
`;

const mr2 = `
  margin-right: 2em;
`;

const mra = `
  margin-right: auto;
`;

const mt0 = `
  margin-top: 0;
`;

const mt1 = `
  margin-top: 1rem;
`;

const mt2 = `
  margin-top: 2rem;
`;

const mtA = `
  margin-top: auto;
`;

const mx1 = `
  margin: 0 1rem;
`;

const mx2 = `
  margin: 0 2rem;
`;

const my1 = `
  margin: 1rem 0;
`;

const my2 = `
  margin: 2rem 0;
`;

const pa0 = `
  padding: 0;
`;

const pa1 = `
  padding: 1em;
`;

const pa2 = `
  padding: 2em;
`;

const pb0 = `
  padding-bottom: 0;
`;

const pb1 = `
  padding-bottom: 1rem;
`;

const pb2 = `
  padding-bottom: 2rem;
`;

const pl0 = `
  padding-left: 0;
`;

const pl1 = `
  padding-left: 1em;
`;

const pl2 = `
  padding-left: 2em;
`;

const pr0 = `
  padding-right: 0;
`;

const pr1 = `
  padding-right: 1em;
`;

const pr2 = `
  padding-right: 2em;
`;

const pt0 = `
  padding-top: 0;
`;

const pt1 = `
  padding-top: 1rem;
`;

const pt2 = `
  padding-top: 2rem;
`;

const px1 = `
  padding: 0 1rem;
`;

const px2 = `
  padding: 0 2rem;
`;

const py1 = `
  padding: 1rem 0;
`;

const py2 = `
  padding: 2rem 0;
`;

// Sizing
const h100 = `
  height: 100%;
`;

const w100 = `
  width: 100%;
`;

// Animation
const transitionAll = `
  transition: all var(--duration) ease;
`;

// Helpers
const hideVisually = `
  clip: rect(0.1rem, 0.1rem, 0.1rem, 0.1rem);
  height: 0.1rem;
  overflow: hidden;
  position: absolute;
  width: 0.1rem;
`;

const cover = area => {
  let props = `position: absolute;`;

  switch (area) {
    case 'top':
      props += ` left: 0; right: 0; top: 0;`;
      break;
    case 'bottom':
      props += ` bottom: 0; left: 0; right: 0;`;
      break;
    case 'left':
      props += ` bottom: 0; left: 0; top: 0;`;
      break;
    case 'right':
      props += ` bottom: 0; right: 0; top: 0;`;
      break;
    default:
      props += ` bottom: 0; left: 0; right: 0; top: 0;`;
      break;
  }

  return props;
};

/* eslint-disable id-length */
const sizes = (h, w) =>
  h && !w ? `height: ${h}; width: ${h};` : `height: ${h}; width: ${w};`;

export {
  absolute,
  absoluteFill,
  aSelfCenter,
  aSelfEnd,
  aSelfStart,
  backgroundAccent,
  backgroundAccentLight,
  backgroundNone,
  backgroundTransparent,
  bold,
  borderCurved,
  borderRound,
  bottom0,
  content,
  contentAround,
  contentBetween,
  contentCenter,
  contentEnd,
  contentFlexEnd,
  contentFlexStart,
  contentStart,
  cover,
  db,
  dib,
  dn,
  f1,
  f2,
  f3,
  f4,
  f5,
  f6,
  f7,
  fixed,
  flex,
  flexColumn,
  flexRow,
  flexWrap,
  grid,
  gridFlex,
  h100,
  hideVisually,
  itemsCenter,
  itemsEnd,
  itemsFlexEnd,
  itemsFlexStart,
  itemsStart,
  jSelfCenter,
  jSelfEnd,
  jSelfStart,
  left0,
  ma0,
  ma1,
  ma2,
  maa,
  mb0,
  mb1,
  mb2,
  mba,
  meta,
  mHorizontal,
  ml0,
  ml1,
  ml2,
  mlA,
  mr0,
  mr1,
  mr2,
  mra,
  mt0,
  mt1,
  mt2,
  mtA,
  mx1,
  mx2,
  my1,
  my2,
  mVertical,
  normal,
  noUnderline,
  overflowAuto,
  overflowHidden,
  overflowXAuto,
  overflowXHidden,
  overflowYAuto,
  overflowYHidden,
  pa0,
  pa1,
  pa2,
  pb0,
  pb1,
  pb2,
  pl0,
  pl1,
  pl2,
  pr0,
  pr1,
  pr2,
  pt0,
  pt1,
  pt2,
  px1,
  px2,
  py1,
  py2,
  relative,
  right0,
  sizes,
  sticky,
  strike,
  tc,
  tj,
  tl,
  top0,
  tr,
  transitionAll,
  ttc,
  ttl,
  ttn,
  ttu,
  underline,
  w100,
  z1,
  z10,
  z15,
  z20,
  z5,
  zUnder,
};
