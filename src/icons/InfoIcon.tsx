import React, { forwardRef } from 'react'

import SVG from '@src/components/SVG'

import type IconProps from './IconProps'

const InfoIcon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, ref) => (
  <SVG
    ref={ref}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z"
      fill="none"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeWidth="32"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M220 220h32v116"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
      d="M208 340h88"
    />
    <path fill="currentColor" d="M248 130a26 26 0 1026 26 26 26 0 00-26-26z" />
  </SVG>
))

InfoIcon.displayName = 'InfoIcon'

export default InfoIcon
