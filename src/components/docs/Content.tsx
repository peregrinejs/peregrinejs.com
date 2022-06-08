import React from 'react'

import type Platform from '@src/Platform'
import usePlatform from '@src/lib/docs/usePlatform'

export interface ContentProps {
  platform: Platform
  children?: React.ReactNode
}

const Content = ({ platform, children }: ContentProps): JSX.Element => {
  const currentPlatform = usePlatform()

  return <>{platform === currentPlatform ? children : null}</>
}

export default Content
