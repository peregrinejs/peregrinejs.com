import Head from 'next/head'
import React from 'react'

import card from '@public/card.png'
import type Platform from '@src/Platform'
import { prettyPlatform } from '@src/Platform'
import Box from '@src/components/Box'
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
  const { title: titleProp, description } = useFrontmatterContext()

  const platform = prettyPlatform(platformProp)
  const title = titleProp
    ? `${titleProp} | Peregrine for ${platform}`
    : `Peregrine for ${platform}`

  return (
    <>
      <Head>
        <title>{title}</title>
        {description ? <meta name="description" content={description} /> : null}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Peregrine_JS" />
        <meta
          name="twitter:title"
          content={
            titleProp ? title : 'Peregrine: build truly artisanal hybrid apps'
          }
        />
        {description ? (
          <meta name="twitter:description" content={description} />
        ) : null}
        <meta
          name="twitter:image"
          content={`https://peregrinejs.com${card.src}`}
        />
      </Head>
      <Root>
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
