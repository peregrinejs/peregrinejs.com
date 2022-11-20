import React, { forwardRef } from 'react'

import SVG from '@src/components/SVG'

import type IconProps from './IconProps'

const Circle = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => (
  <SVG
    ref={ref}
    {...props}
    viewBox="0 0 2 2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle fill="currentColor" cx="1" cy="1" r="1" />
  </SVG>
))

Circle.displayName = 'Circle'

export default Circle
