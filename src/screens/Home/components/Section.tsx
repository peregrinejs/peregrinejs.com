import { styled } from '@src/stitches.config'

const Section = styled('section', {
  'padding': '0 $headerPadding',

  '@lg': {
    maxWidth: '90vw',
    margin: '0 auto',
  },
})

export default Section
