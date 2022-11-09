import { styled } from '@src/stitches.config'

import Box from './Box'

const Content = styled(Box, {
  '@md': {
    maxWidth: '$contentMaxWidth',
    margin: '0 auto',
    padding: '0 $contentPaddingMd',
  },

  '@lg': {
    padding: '0 $contentPaddingLg',
  },
})

export default Content
