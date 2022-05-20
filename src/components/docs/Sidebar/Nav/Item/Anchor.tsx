import { styled } from '@src/stitches.config'

const Anchor = styled('a', {
  'display': 'block',
  'cursor': 'pointer',
  'padding': '0 $headerPadding',
  'lineHeight': '$navItem',
  'color': '$gray2',

  '@md': {
    fontSize: '$sm',
  },

  '&:hover': {
    color: '$gray1',
  },
})

export default Anchor
