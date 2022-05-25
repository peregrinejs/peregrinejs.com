import platformAtom from '@src/atoms/platformAtom'
import CodeBlockSwitch from '@src/components/CodeBlockSwitch'
import { isPlatform } from '@src/Platform'
import { useAtom } from 'jotai'
import React from 'react'

export interface SwitchProps {
  children: React.ReactNode
}

const Switch = ({ children }: SwitchProps): JSX.Element => {
  const [platform, setPlatform] = useAtom(platformAtom)

  const handleTabClick = (tab: string) => {
    if (isPlatform(tab)) {
      setPlatform(tab)
    }
  }

  return (
    <CodeBlockSwitch tab={platform} onTabClick={handleTabClick}>
      {children}
    </CodeBlockSwitch>
  )
}

export default Switch
