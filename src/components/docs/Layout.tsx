import Head from 'next/head'
import React from 'react'

import Box from '@src/components/Box'
import PlatformSelect from '@src/components/docs/PlatformSelect'
import { styled } from '@src/stitches.config'

import Sidebar from './Sidebar'

export interface LayoutProps {
  children: React.ReactNode
  title?: string
}

const Layout = ({ children, title }: LayoutProps): JSX.Element => {
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
        <Box>
          <Sidebar />
        </Box>
        <Container>
          <Main>
            <PlatformSelect />
            {children}
          </Main>
        </Container>
      </Root>
    </>
  )
}

const Root = styled(Box, {
  'display': 'flex',
  'flexDirection': 'column',
  'minHeight': '100vh',

  '@md': {
    flexDirection: 'row',
  },
})

const Container = styled(Box, {
  'display': 'grid',
  'gridTemplate': '"main" auto/1fr',
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
  gridArea: 'main',
  maxWidth: '$contentMaxWidth',
  minWidth: 0,
})

export default Layout
