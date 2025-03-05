import React from "react";
import logo from '../../assets/logo.png'
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";

import {
  HeaderContainer,
  Row,
  Input,
  Menu,
  MenuRight,
  BuscarInputContainer,
  Wrapper,
  UserPicture,
  Picture,
  Spacing
} from './Styles';

const Header = ({ autenticado, handleLogout  }) => {
  const navigate = useNavigate()
  
  const clickRegister = () => { navigate('/register') }
  const clickSignIn = () => { navigate('/login') }
  const clickHome = () => { navigate('/') }
  
  return (
    <Wrapper>
      <HeaderContainer>
        <Row>
          <Picture src={logo} alt="Logo da DIO" onClick={clickHome}/>
          {
            autenticado ? (
              <>
                <BuscarInputContainer>
                  <Input placeholder="Buscar..." />
                </BuscarInputContainer>

                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null
          }
        </Row>
        <Row>
          {
            autenticado ? (
              <>
                <UserPicture src="https://avatars.githubusercontent.com/u/111618371?s=400&u=29bd54d1a7e42503be9f61cd927a2b4ddb0898ba&v=4" />
                <Spacing />
                <Button title="Sair" onClick={handleLogout} />
              </>
            ) : (
              <>
                <Menu onClick={clickHome}>Home</Menu>

                <Button title="Cadastrar" variant="primary" onClick={clickRegister}/>
                <Button title="Entrar" variant="primary" onClick={clickSignIn}/>
              </>
            )
          }
        </Row>
      </HeaderContainer>
    </Wrapper>
  )
}

export default Header