import { ButtonContainer, ButtonVariant } from './styles'

interface ButtonProps {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}

// esse component nao está sendo mais usado, apenas para estudos.
