import React, { forwardRef } from 'react'

import SVG from '@src/components/SVG'

import type IconProps from './IconProps'

const RadioIcon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => (
  <SVG
    ref={ref}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <circle cx="256" cy="256.02" r="32" fill="currentColor" />
    <path
      d="M184.25 192.25a96 96 0 000 127.52M327.77 319.77a96 96 0 000-127.52M133.28 141.28a168 168 0 000 229.44M378.72 370.72a168 168 0 000-229.44M435 416a240.34 240.34 0 000-320M77 96a240.34 240.34 0 000 320"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
  </SVG>
))

RadioIcon.displayName = 'RadioIcon'

export default RadioIcon
