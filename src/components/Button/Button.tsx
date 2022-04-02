import {
  Size,
  Variant,
  Appearance,
} from './enums'
import {
  ButtonContainer,
  StyleProps
} from './styles'

interface Props extends StyleProps {
  onClick: () => void
  label: string
}

function Button ({
  size = Size.Medium,
  variant = Variant.Text,
  appearance = Appearance.Primary,
  

  onClick,
  label = 'SIGN ME A LABEL',
}: Props) {
  return (<ButtonContainer
    onClick={onClick}
    size={size}
    variant={variant}
    appearance={appearance}
  >
    {label}
  </ButtonContainer>)
}

export { Button }
