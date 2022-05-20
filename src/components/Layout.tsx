import Head from 'next/head'
import React from 'react'

import Header from '@src/components/Header'

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
      <Header />
      {children}
    </>
  )
}

export default Layout
