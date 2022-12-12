import React from 'react'

import Box from '@src/components/Box'
import _BookIcon from '@src/icons/BookIcon'
import _ColorPaletteIcon from '@src/icons/ColorPaletteIcon'
import _FlashIcon from '@src/icons/FlashIcon'
import _RadioIcon from '@src/icons/RadioIcon'
import _RocketIcon from '@src/icons/RocketIcon'
import { styled } from '@src/stitches.config'

export interface GridItemProps {
  title: string
  description: React.ReactNode
  icon: 'rocket' | 'book' | 'flash' | 'radio' | 'color-palette'
}

const getIcon = (icon: GridItemProps['icon']): JSX.Element => {
  switch (icon) {
    case 'rocket':
      return <RocketIcon />
    case 'book':
      return <BookIcon />
    case 'flash':
      return <FlashIcon />
    case 'radio':
      return <RadioIcon />
    case 'color-palette':
      return <ColorPaletteIcon />
  }
}

const GridItem = ({
  title,
  description,
  icon: iconName,
}: GridItemProps): JSX.Element => {
  const icon = getIcon(iconName)

  return (
    <Root>
      {icon}
      <Content>
        <h4>{title}</h4>
        <p>{description}</p>
      </Content>
    </Root>
  )
}

const Root = styled(Box, {
  '$$size': '26px',

  'display': 'flex',
  'alignItems': 'center',

  '@md': {
    $$size: '32px',
  },

  '@lg': {
    $$size: '48px',
  },
})

const Content = styled(Box, {
  'flex': 1,

  '& > *': {
    margin: 0,
  },
})

const iconStyles = {
  margin: '0 1em',
  width: '$$size',
  height: '$$size',
} as const

const RocketIcon = styled(_RocketIcon, iconStyles)
const BookIcon = styled(_BookIcon, iconStyles)
const FlashIcon = styled(_FlashIcon, iconStyles)
const RadioIcon = styled(_RadioIcon, iconStyles)
const ColorPaletteIcon = styled(_ColorPaletteIcon, iconStyles)

export default GridItem
