import React, { forwardRef } from 'react'

import SVG from '@src/components/SVG'

import type IconProps from './IconProps'

const MenuIcon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => (
  <SVG
    ref={ref}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
      d="M80 160h352M80 256h352M80 352h352"
    />
  </SVG>
))

MenuIcon.displayName = 'MenuIcon'

export default MenuIcon
