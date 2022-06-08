import Head from 'next/head'
import React from 'react'

import Header from '@src/components/Header'
import { styled } from '@src/stitches.config'

import Box from './Box'

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
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Container>
        <Header />
        {children}
      </Container>
    </>
  )
}

const Container = styled(Box, {
  maxWidth: 1440,
  margin: '0 auto',
})

export default Layout
