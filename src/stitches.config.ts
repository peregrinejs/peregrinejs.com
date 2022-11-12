import { createStitches } from '@stitches/react'

import { bpMd, bpLg } from './atoms/bpAtom'

export const fontBasis = 16
export const shikiCopySpacing = 13
export const shikiCopySize = 18

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
      bg: '12 13 13',
      contentbg: '20 21 22',
      gray1: '255 255 255',
      gray2: '186 185 182',
      gray3: '116 112 106',
      gray4: '42 41 40',
      gray5: '29 28 27',
      accent1: '89 142 255',
      accent2: '205 220 255',
      money: '163 255 169',
      info: '86 189 255',
      warning: '255 193 61',
      brandapple: '255 255 255',
      brandandroid: '120 194 87',
      red: '255 0 0',
      green: '0 255 0',
      blue: '0 0 255',
    },
    fonts: {
      text: 'Lato, Helvetica, Arial, sans-serif, sans-serif',
      monospace: 'Menlo, monospace',
    },
    fontSizes: {
      xsm: '0.65rem',
      sm: '0.8rem',
      md: '1rem',
      lg: '1.2rem',
      xlg: '1.6rem',
      xxlg: '2.1rem',
      xxxlg: '3.2rem',
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
      contentPadding: '0 20px 20px',
      contentPaddingMd: '0 30px 30px',
      contentPaddingLg: '0 60px 60px',
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
    margin: '1rem 0',
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
    'position': 'relative',
    'overflow': 'scroll',

    '& code': {
      'fontSize': '$sm',
      'lineHeight': '1.5em',

      '& .line': {
        display: 'block',
        padding: '0 1.5rem',
        content: ' ',
      },

      '& .line::before': {
        textAlign: 'right',
      },

      '&::before, &::after, & .line::before': {
        display: 'inline-block',
        margin: '0 0.5em',
        fontSize: '$xsm',
        color: 'rgba($gray3 / 0.5)',
        userSelect: 'none',
      },
    },

    '&[data-file]': {
      '&::before': {
        display: 'block',
        content: 'attr(data-file)',
        margin: '1em 1em 0',
        paddingLeft: '1.7em',
        fontSize: '$sm',
        color: 'rgb($gray2)',
        backgroundImage:
          'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KICA8cGF0aCBkPSJNNDE2IDIyMS4yNVY0MTZhNDggNDggMCAwMS00OCA0OEgxNDRhNDggNDggMCAwMS00OC00OFY5NmE0OCA0OCAwIDAxNDgtNDhoOTguNzVhMzIgMzIgMCAwMTIyLjYyIDkuMzdsMTQxLjI2IDE0MS4yNmEzMiAzMiAwIDAxOS4zNyAyMi42MnoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2FhYSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzMiIgLz4KICA8cGF0aCBkPSJNMjU2IDU2djEyMGEzMiAzMiAwIDAwMzIgMzJoMTIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNhYWEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzMiIgLz4KPC9zdmc+Cg==)', // src/file.svg
        backgroundRepeat: 'no-repeat',
      },
    },

    '&::after': {
      display: 'block',
      position: 'absolute',
      top: shikiCopySpacing,
      right: shikiCopySpacing,
      width: shikiCopySize,
      height: shikiCopySize,
      content: ' ',
    },

    '&:hover': {
      '&::after': {
        backgroundImage:
          'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KICA8cmVjdCB4PSIxMjgiIHk9IjEyOCIgd2lkdGg9IjMzNiIgaGVpZ2h0PSIzMzYiIHJ4PSI1NyIgcnk9IjU3IiBmaWxsPSJub25lIiBzdHJva2U9IiNhYWEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiIC8+CiAgPHBhdGggZD0iTTM4My41IDEyOGwuNS0yNGE1Ni4xNiA1Ni4xNiAwIDAwLTU2LTU2SDExMmE2NC4xOSA2NC4xOSAwIDAwLTY0IDY0djIxNmE1Ni4xNiA1Ni4xNiAwIDAwNTYgNTZoMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2FhYSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjMyIiAvPgo8L3N2Zz4K)', // src/copy.svg
        cursor: 'pointer',
      },
    },

    '&[data-copied]': {
      '&::after': {
        backgroundImage:
          'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KICA8cGF0aCBkPSJNNDQ4IDI1NmMwLTEwNi04Ni0xOTItMTkyLTE5MlM2NCAxNTAgNjQgMjU2czg2IDE5MiAxOTIgMTkyIDE5Mi04NiAxOTItMTkyeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYWFhIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMzIiIC8+CiAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYWFhIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiIGQ9Ik0zNTIgMTc2TDIxNy42IDMzNiAxNjAgMjcyIiAvPgo8L3N2Zz4K)', // src/checkmark.svg
        cursor: 'default',
      },
    },

    '& code::before, & code::after': {
      display: 'inline-block',
      content: ' ',
    },

    '&[data-content-before] code::before': {
      marginTop: '0.5em',
    },

    '&[data-content-after] code::after': {
      marginBottom: '0.5em',
    },

    '&[data-content-before] code::before, &[data-content-after] code::after': {
      content: `attr(data-line-number-padding) '⋮'`,
    },

    '&[data-language] code': {
      '&::before, &::after, & .line': {
        padding: '0 0.5rem',
      },

      '& .line[data-diff-symbol="+"]': {
        backgroundColor: 'rgba($green / 0.05)',
      },

      '& .line[data-diff-symbol="-"]': {
        backgroundColor: 'rgba($red / 0.115)',
      },

      '& .line[data-line-number]::before': {
        content: `attr(data-line-number-padding) attr(data-line-number) ' ' attr(data-diff-symbol)`,
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
    paddingLeft: '2rem',
  },
  'li': {
    'margin': '0.75em 0',

    '&::marker': {
      fontWeight: '$bold',
      color: 'rgb($gray1)',
    },
  },
  'menu > li': {
    margin: 0,
  },
  'dd': {
    marginBottom: '0.5em',
  },
})
