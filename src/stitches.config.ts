import { createStitches } from '@stitches/react'

const fontBasis = 16

export const media = {
  md: '(min-width: 640px)',
  lg: '(min-width: 1024px)',
}

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  media,
  theme: {
    colors: {
      bg: '#141517',
      gray1: '255 255 255',
      gray2: '186 185 182',
      gray3: '116 112 106',
      gray4: '42 41 40',
      gray5: '29 28 27',
      accent1: '100 157 255',
      hlcomment: '#7d8d7b',
      hlkeyword: '#726e6b',
      hloperator: '#c1c1c1',
      hlvariable: '#5f8787',
      hlclass: '#f1d9b2',
      hlstring: '#7c5c5d',
      hlconstant: '#aaa',
      hlfunction: '#888',
      hlmeta: '#61889c',
      money: '163 255 169',
    },
    fonts: {
      text: 'Raleway, Times, Times New Roman, Georgia, serif',
      monospace: 'Menlo, monospace',
    },
    fontSizes: {
      sm: '0.85rem',
      md: '1rem',
      lg: '1.25rem',
      xlg: '1.5rem',
      xxlg: '2rem',
      xxxlg: '3rem',
      logo: 'calc($lineHeights$logo * 0.875)',
    },
    fontWeights: {
      regular: 300,
      bold: 800,
    },
    lineHeights: {
      logo: '$sizes$logo',
      text: '1.5em',
      heading: '1em',
      navItem: '1.75em',
    },
    letterSpacings: {
      money: '2px',
    },
    space: {
      contentPaddingMd: '30px',
      contentPaddingLg: '60px',
      navItemPaddingX: '6px',
      navItemPaddingY: 'calc($navItemPaddingX * 2)',
      headerPadding: '20px',
    },
    sizes: {
      logo: '32px',
      contentMaxWidth: '960px',
    },
  },
  utils: {
    size: (value: string | number) => ({
      width: value,
      height: value,
    }),
    mx: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: (value: string | number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string | number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
})

export const globalStyles = globalCss({
  '*': {
    'boxSizing': 'border-box',

    '& ::selection,&::selection': {
      backgroundColor: 'rgb($gray3)',
    },
  },
  'html, body': {
    margin: 0,
    padding: 0,
  },
  'html': {
    'fontSize': fontBasis,

    '@md': {
      fontSize: fontBasis * 1.05,
    },

    '@lg': {
      fontSize: fontBasis * 1.25,
    },
  },
  'body': {
    backgroundColor: '$bg',
    fontFamily: '$text',
    fontWeight: '$regular',
    lineHeight: '$text',
    color: 'rgb($gray2)',
  },
  'body, #__next': {
    minHeight: '100vh',
  },
  'h1, h2, h3, h4, h5, h6': {
    margin: 0,
    fontFamily: '$text',
    lineHeight: '$heading',
    color: 'rgb($gray1)',
  },
  'h1, h2, h3, h4': {
    fontWeight: '$bold',
  },
  'h5, h6': {
    fontWeight: '$regular',
  },
  'h1': {
    'fontSize': '$xlg',
    '@md': { fontSize: '$xxlg' },
    '@lg': { fontSize: '$xxxlg' },
  },
  'h2': {
    'fontSize': '$lg',
    '@md': { fontSize: '$xlg' },
    '@lg': { fontSize: '$xxlg' },
  },
  'h3': {
    'fontSize': '$md',
    '@md': { fontSize: '$lg' },
    '@lg': { fontSize: '$xlg' },
  },
  'h4': {
    'fontSize': '$md',
    '@md': { fontSize: '$lg' },
    '@lg': { fontSize: '$lg' },
  },
  'h5': {
    fontSize: '$md',
  },
  'h6': {
    fontSize: '$sm',
  },
  'a': {
    'color': 'rgb($accent1)',
    'textDecoration': 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
  ':not(pre) > code': {
    backgroundColor: '$gray4',
    fontFamily: '$monospace',
    padding: '1px 3px 2px',
  },
  'strong': {
    fontWeight: '$bold',
    color: 'rgb($gray1)',
  },
  'li p, dd p, dt p': {
    margin: 0,
  },
  'dd': {
    marginBottom: '0.5em',
  },
})
