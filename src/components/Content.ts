import { styled } from '@src/stitches.config'

import Box from './Box'

const Content = styled(Box, {
  'padding': '$contentPadding',

  '@md': {
    maxWidth: '$contentMaxWidth',
    margin: '0 auto',
    padding: '$contentPaddingMd',
  },

  '@lg': {
    padding: '$contentPaddingLg',
  },
})

export default Content
