import React from 'react'

import type Platform from '@src/Platform'
import usePlatform from '@src/lib/docs/usePlatform'

export type PlatformTemplateProps = { [K in Platform]: boolean }

export interface TemplateProps extends PlatformTemplateProps {
  children?: React.ReactNode
}

const Template = ({ children, ...props }: TemplateProps): JSX.Element => {
  const currentPlatform = usePlatform()

  return <>{props[currentPlatform] ? children : null}</>
}

export default Template
