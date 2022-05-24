import { styled } from '@src/stitches.config'

const Anchor = styled('a', {
  'display': 'block',
  'cursor': 'pointer',
  'padding': '0 $headerPadding',
  'lineHeight': '$navItem',
  'color': 'rgb($gray2)',

  '&:hover': {
    color: 'rgb($accent1)',
    textDecoration: 'none',
  },

  '@md': {
    fontSize: '$sm',
  },

  'variants': {
    current: {
      true: {
        color: 'rgb($accent1)',
        backgroundColor: 'rgba($accent1 / 29%)',
        fontWeight: '$bold',
      },
    },
  },
})

export default Anchor
