import React from 'react'

import type { LayoutProps } from '@src/components/Layout'
import Layout from '@src/components/Layout'
import { styled } from '@src/stitches.config'

const ContentLayout = ({ children, ...props }: LayoutProps): JSX.Element => {
  return (
    <Layout {...props}>
      <Main>{children}</Main>
    </Layout>
  )
}

const Main = styled('main', {
  '@md': {
    maxWidth: '$contentMaxWidth',
    margin: '0 auto',
    padding: '$contentPaddingMd',
  },

  '@lg': {
    padding: '$contentPaddingLg',
  },
})

export default ContentLayout
