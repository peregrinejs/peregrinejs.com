import Head from 'next/head'
import React from 'react'

import Box from '@src/components/Box'
import Footer from '@src/components/Footer'
import Header from '@src/components/Header'
import { styled } from '@src/stitches.config'

export interface LayoutProps {
  title?: string
  description?: string
  children: React.ReactNode
}

const Layout = ({
  title = 'Peregrine',
  description = 'TODO',
  children,
}: LayoutProps): JSX.Element => {
  return (
    <Root>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Body>
        <Container>
          <Header />
          {children}
        </Container>
      </Body>
      <Footer />
    </Root>
  )
}

const Root = styled(Box, {
  'display': 'grid',
  'gridTemplateRows': '1fr auto',
  'minHeight': '100vh',

  '& > *': {
    width: '100vw',
  },
})

const Body = styled(Box, {
  backgroundColor: 'rgb($contentbg)',
})

const Container = styled(Box, {
  maxWidth: 1440,
  margin: '0 auto',
})

export default Layout
