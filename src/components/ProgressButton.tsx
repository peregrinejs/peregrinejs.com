import useSize from '@imhoff/react-hooks/useSize'
import useStatefulTransition from '@imhoff/react-hooks/useStatefulTransition'
import React, { useRef } from 'react'

import type { ButtonProps } from './Button'
import Button from './Button'
import ProgressSpinner from './ProgressSpinner'

export interface ProgressButtonProps extends ButtonProps {
  inProgress?: boolean
}

const ProgressButton = ({
  inProgress = false,
  children,
  css,
  ...props
}: ProgressButtonProps): JSX.Element => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const size = useSize(buttonRef)
  const inProgressState = useStatefulTransition(inProgress, {
    enterDelay: 500,
    enterDuration: 0,
    exitDelay: 0,
    exitDuration: 0,
  })

  const showSpinner = inProgressState === 'entered'

  return (
    <Button
      ref={buttonRef}
      {...props}
      aria-disabled={inProgress ? true : props['aria-disabled']}
      css={{
        ...css,
        display: 'flex',
        gap: '0.5em',
        alignItems: 'center',
        justifyContent: 'center',
        width: showSpinner ? size?.width : undefined,
        height: showSpinner ? size?.height : undefined,
      }}
    >
      {showSpinner ? null : children}
      <ProgressSpinner
        css={{
          $$size: '1.5em',
          display: showSpinner ? 'block' : 'none',
          color: 'rgb($gray3)',
        }}
      />
    </Button>
  )
}

export default ProgressButton
