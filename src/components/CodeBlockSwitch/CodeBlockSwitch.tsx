import React, { useState } from 'react'

import { styled } from '@src/stitches.config'

import Box from '../Box'

export interface CodeBlockSwitchProps {
  children: React.ReactNode
}

const CodeBlockSwitch = ({ children }: CodeBlockSwitchProps): JSX.Element => {
  const childrenArray: React.ReactElement[] = React.Children.toArray(
    children,
  ).map(child => {
    if (!React.isValidElement(child)) {
      throw new Error('CodeBlockSwitch children must be Tab components.')
    }

    return child
  })
  const tabs = childrenArray.map(child => child.props.name)
  const [currentTab, setCurrentTab] = useState(tabs[0])
  const handleTabClick = (tab: string) => setCurrentTab(tab)

  return (
    <Root>
      <Tabs>
        {tabs.map(tab => (
          <Tab
            key={tab}
            selected={tab === currentTab}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </Tab>
        ))}
      </Tabs>
      {childrenArray.find(child => child.props.name === currentTab)}
    </Root>
  )
}

const Root = styled(Box, {
  margin: '-0.5em 0 1em',
})

const Tabs = styled(Box, {
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  gap: 'calc($navItemPaddingX * 2)',
  userSelect: 'none',
})

const Tab = styled('a', {
  display: 'block',
  padding: '0.1em $navItemPaddingX',
  cursor: 'pointer',
  color: 'rgb($gray1)',

  variants: {
    selected: {
      true: {
        fontWeight: '$bold',
      },
    },
  },
})

export default CodeBlockSwitch
