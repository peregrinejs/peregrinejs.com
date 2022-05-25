import React, { useState } from 'react'

import { styled } from '@src/stitches.config'

import Box from '../Box'

export interface ControlledCodeBlockSwitchProps {
  children: React.ReactNode
  tab: string
  onTabClick: (tab: string) => void
}

export interface UncontrolledCodeBlockSwitchProps {
  children: React.ReactNode
}

export type CodeBlockSwitchProps =
  | ControlledCodeBlockSwitchProps
  | UncontrolledCodeBlockSwitchProps

const CodeBlockSwitch = ({
  children,
  ...props
}: CodeBlockSwitchProps): JSX.Element => {
  const childrenArray: React.ReactElement[] = React.Children.toArray(
    children,
  ).map(child => {
    if (!React.isValidElement(child) || !child.props.name) {
      throw new Error('CodeBlockSwitch children must be Tab components.')
    }

    return child
  })

  const tabs = childrenArray.map(child => {
    return child.props.name
  })
  const [currentTabUncontrolled, setCurrentTabUncontrolled] = useState(tabs[0])
  const currentTab = 'tab' in props ? props.tab : currentTabUncontrolled
  const setCurrentTab = (tab: string) => {
    if ('onTabClick' in props) {
      props.onTabClick(tab)
    } else {
      setCurrentTabUncontrolled(tab)
    }
  }

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
  gap: '$navItemPaddingX',
  userSelect: 'none',
})

const Tab = styled('a', {
  display: 'block',
  padding: '0.1em 0.5em',
  cursor: 'pointer',
  color: 'rgb($gray1)',

  variants: {
    selected: {
      true: {
        backgroundColor: 'rgb($gray4)',
        fontWeight: '$bold',
      },
    },
  },
})

export default CodeBlockSwitch
