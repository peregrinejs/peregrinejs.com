import Head from 'next/head'
import React from 'react'

import type Platform from '@src/Platform'
import { prettyPlatform } from '@src/Platform'
import Box from '@src/components/Box'
import createSlug from '@src/lib/createSlug'
import useFrontmatterContext from '@src/lib/docs/useFrontmatterContext'
import { styled } from '@src/stitches.config'

import Main from './Main'
import Sidebar from './Sidebar'

export interface LayoutProps {
  children: React.ReactNode
  platform: Platform
}

const Layout = ({
  children,
  platform: platformProp,
}: LayoutProps): JSX.Element => {
  const { title } = useFrontmatterContext()
  const platform = prettyPlatform(platformProp)
  const titleSlug = title ? createSlug(title) : undefined

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
      <Root id={titleSlug}>
        <Box>
          <Sidebar />
        </Box>
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
  'minHeight': '100vh',
  'backgroundColor': 'rgb($contentbg)',

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

export default Layout
