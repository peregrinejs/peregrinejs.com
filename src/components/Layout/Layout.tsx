import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

import background from '@public/background.jpg'
import card from '@public/card.png'
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
  title: titleProp,
  description,
  children,
}: LayoutProps): JSX.Element => {
  const { route } = useRouter()

  const title = titleProp ? `${titleProp} | Peregrine` : 'Peregrine'
  const isHome = route === '/'

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
        <Body home={isHome}>
          <HeaderWrapper home={isHome}>
            <Header home={isHome} />
          </HeaderWrapper>
          <Box>{children}</Box>
        </Body>
        <Footer />
      </Root>
    </>
  )
}

const Root = styled(Box, {
  'display': 'grid',
  'gridTemplateRows': '1fr auto',
  'minHeight': '100vh',

  '& > *': {
    width: '100%',
  },
})

const Body = styled(Box, {
  'backgroundColor': 'rgb($contentbg)',

  '& > *': {
    maxWidth: 1440,
    margin: '0 auto',
  },

  'variants': {
    home: {
      true: {
        '@md': {
          backgroundImage: `
            linear-gradient(
              rgba($colors$contentbg / 25%) 0vh,
              rgba($colors$contentbg / 85%) 80vh,
              rgb($colors$contentbg) min(100vh, ${background.height}px)
            ),
            url(${background.src})
            ${background.blurDataURL ? `, url(${background.blurDataURL})` : ''}
          `,
          backgroundSize: `${background.width / 2}px ${
            background.height / 2
          }px`,
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        },
      },
    },
  },
})

const HeaderWrapper = styled(Box, {
  variants: {
    home: {
      true: {
        '@md': {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
        },
      },
    },
  },
})

export default Layout
