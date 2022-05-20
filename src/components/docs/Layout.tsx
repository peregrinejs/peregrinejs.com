import Head from 'next/head'
import React from 'react'

import Box from '@src/components/Box'
import { styled } from '@src/stitches.config'

import Sidebar from './Sidebar'

export interface LayoutMeta {
  title?: string
}

export interface LayoutProps {
  children: React.ReactNode
  meta?: LayoutMeta
}

const Layout = ({
  children,
  meta: { title } = {},
}: LayoutProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>
          {title
            ? `${title} | Peregrine Documentation`
            : 'Peregrine Documentation'}
        </title>
        <meta name="description" content="TODO" />
      </Head>
      <Root>
        <Sidebar />
        <Container>
          <Main>{children}</Main>
        </Container>
      </Root>
    </>
  )
}

const Root = styled(Box, {
  'display': 'flex',
  'flexDirection': 'column',

  '@md': {
    flexDirection: 'row',
  },
})

const Container = styled(Box, {
  'height': '100vh',
  'overflowY': 'scroll',
  'flex': 1,
  'padding': '$headerPadding',

  '@md': {
    padding: '$contentPaddingMd',
  },

  '@lg': {
    padding: '$contentPaddingLg',
  },
})

const Main = styled('main', {
  maxWidth: '$contentMaxWidth',
})

export default Layout
