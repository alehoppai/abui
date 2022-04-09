import React from 'react'
import { FloatingButtonContainer } from './styles'
import { StyleProps } from './types'
import { Variant } from '../../enums'


interface Props extends StyleProps {
  onClick: () => void
}

/**
 * TODO: add icon support in future, when icon component will be ready 
 */
function FloatingButton({
  variant,
  size,
  appearance,
  onClick,
}: Props) {
  const variantRewrite: unknown = variant

  return <FloatingButtonContainer
    variant={variantRewrite as Variant}
    size={size}
    appearance={appearance}
    onClick={onClick}
  >
    B
  </FloatingButtonContainer>
}

export { FloatingButton }
