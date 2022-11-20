import React from 'react'

import Content from '@src/components/Content'
import type { LayoutProps } from '@src/components/Layout'
import Layout from '@src/components/Layout'

const ContentLayout = ({ children, ...props }: LayoutProps): JSX.Element => {
  return (
    <Layout {...props}>
      <main>
        <Content>{children}</Content>
      </main>
    </Layout>
  )
}

export default ContentLayout
