import React, { forwardRef } from 'react'

import SVG from '@src/components/SVG'

import type IconProps from './IconProps'

const LinkIcon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => (
  <SVG
    ref={ref}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      d="M208 352h-64a96 96 0 010-192h64M304 160h64a96 96 0 010 192h-64M163.29 256h187.42"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="36"
    />
  </SVG>
))

LinkIcon.displayName = 'LinkIcon'

export default LinkIcon
