import Head from 'next/head'
import React from 'react'

import type Platform from '@src/Platform'
import { prettyPlatform } from '@src/Platform'
import AnchorHeading from '@src/components/AnchorHeading'
import Box from '@src/components/Box'
import PlatformSelect from '@src/components/docs/PlatformSelect'
import { styled } from '@src/stitches.config'

import Sidebar from './Sidebar'

export interface LayoutProps {
  children: React.ReactNode
  platform: Platform
  title?: string
}

const Layout = ({
  children,
  platform: platformProp,
  title,
}: LayoutProps): JSX.Element => {
  const platform = prettyPlatform(platformProp)

  return (
    <>
      <Head>
        <title>
          {title
            ? `${title} | Peregrine for ${platform}`
            : `Peregrine for ${platform}`}
        </title>
        <meta name="description" content="TODO" />
      </Head>
      <Root>
        <Box>
          <Sidebar />
        </Box>
        <Container>
          <Main>
            <TitleBox>
              <Title>{title}</Title>
              <PlatformSelect />
            </TitleBox>
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

const TitleBox = styled(Box, {
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
})

const Title = styled(AnchorHeading.H1, {
  flex: 1,
})

export default Layout
