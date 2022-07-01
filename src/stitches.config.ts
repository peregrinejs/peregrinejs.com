import { createStitches } from '@stitches/react'

import { bpMd, bpLg } from './atoms/bpAtom'

const fontBasis = 16

export const media = {
  md: `(min-width: ${bpMd}px)`,
  lg: `(min-width: ${bpLg}px)`,
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
      bg: '20 21 22',
      gray1: '255 255 255',
      gray2: '186 185 182',
      gray3: '116 112 106',
      gray4: '42 41 40',
      gray5: '29 28 27',
      accent1: '100 157 255',
      accent2: '205 220 255',
      money: '163 255 169',
      info: '$accent1',
      warning: '255 193 61',
      brandapple: '255 255 255',
      brandandroid: '120 194 87',
    },
    fonts: {
      text: 'Lato, Helvetica, Arial, sans-serif, sans-serif',
      monospace: 'Menlo, monospace',
    },
    fontSizes: {
      xsm: '0.75rem',
      sm: '0.85rem',
      md: '1rem',
      lg: '1.25rem',
      xlg: '1.5rem',
      xxlg: '2rem',
      xxxlg: '3rem',
      logo: 'calc($lineHeights$logo * 0.875)',
    },
    fontWeights: {
      light: 300,
      bold: 700,
      black: 900,
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
      navItemPaddingY: '0px',
      headerPadding: '20px',
    },
    sizes: {
      contentMaxWidth: '1140px',
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
  ':root': {
    $shiki$color$background: 'rgb($colors$gray5)',
    $shiki$color$text: 'rgb($colors$gray2)',
    $shiki$token$comment: 'rgb(125 141 123)',
    $shiki$token$constant: 'rgb(170 170 170)',
    $shiki$token$function: 'rgb(136 136 136)',
    $shiki$token$parameter: '$shiki$color$text',
    $shiki$token$keyword: 'rgb(114 110 107)',
    $shiki$token$link: 'rgb($colors$accent1)',
    $shiki$token$punctuation: '$shiki$token$function',
    $shiki$token$string: 'rgb(124 92 93)',
    $shiki$token$string$expression: '$shiki$token$string',
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
    backgroundColor: 'rgb($bg)',
    fontFamily: '$text',
    fontWeight: '$light',
    color: 'rgb($gray2)',
  },
  'body, #__next': {
    minHeight: '100vh',
  },
  'h1, h2, h3, h4, h5, h6': {
    margin: 0,
    fontFamily: '$text',
    fontWeight: '$black',
    lineHeight: '$heading',
    color: 'rgb($gray1)',
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
    backgroundColor: 'rgb($gray4)',
    padding: '1px 3px',
    color: 'rgba($accent2 / 0.9)',
  },
  'code': {
    fontFamily: '$monospace',
  },
  'pre.shiki': {
    'padding': '0.75em',
    'overflow': 'scroll',

    '& code': {
      'fontSize': '0.75em',
      'lineHeight': '1.5em',

      '& .line': {
        display: 'block',
      },

      '& .line[data-line-number]::before': {
        display: 'inline-block',
        width: '1em',
        fontSize: '0.85em',
        content: 'attr(data-line-number)',
        margin: '0 1.5em 0 0.5em',
        textAlign: 'right',
        color: 'rgba($gray3 / 0.5)',
        userSelect: 'none',
      },
    },
  },
  'p': {
    lineHeight: '$text',
  },
  'th p, td p, dd p, dt p': {
    margin: 0,
  },
  'strong': {
    fontWeight: '$bold',
    color: 'rgb($gray1)',
  },
  'abbr': {
    textDecoration: 'none',
    borderBottomColor: 'rgb($gray3)',
    borderBottomWidth: 1,
    borderBottomStyle: 'dashed',
  },
  'ul': {
    listStyleType: 'square',
  },
  'ul, ol, dl': {
    lineHeight: '$text',
  },
  'dd': {
    marginBottom: '0.5em',
  },
})
