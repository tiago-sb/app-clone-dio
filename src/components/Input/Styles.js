import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 100%;
  height: 30px;
  max-width: 265px;
  border-bottom: 1px solid #3b3450;

  display: flex;
  align-itms: center;
  margin-bottom: 20px;
`

export const IconContainer = styled.div`
  margin: 7.5px;
  color: #FFF;
`

export const InputText = styled.input`
  background-color: transparent;
  padding: .5rem;
  border: 0;
  height: 30px;
  max-width: 265px;
  color: #fff;
`

export const ErrorText = styled.p`
  color: red;
  font-size: 15px;
  margin: 15px 0;
`