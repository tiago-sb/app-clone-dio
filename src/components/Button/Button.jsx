import { ButtonContainer } from './Style'
import React from 'react'

const Button = ({ title, variant = "primary", onClick }) => {
  return (
    <>
      <ButtonContainer variant={variant} onClick={onClick}>
        {title}
      </ButtonContainer>
    </>
  )
}

export default Button