import React from "react";
import logo from '../../assets/logo.png'
import Button from "../Button/Button";

import {
    HeaderContainer, 
    Row, 
    Input, 
    Menu, 
    MenuRight, 
    BuscarInputContainer,
    Wrapper,
    UserPicture,
    Picture
} from './Styles';

const Header = ({autenticado}) => {
    return(
        <Wrapper>
            <HeaderContainer>
                <Row>
                    <Picture src={logo} alt="Logo da DIO" />
                    
                    {
                        autenticado ? (
                            <>
                                <BuscarInputContainer>
                                <Input placeholder="Buscar..."/>
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
                            <UserPicture src="https://avatars.githubusercontent.com/u/111618371?s=400&u=29bd54d1a7e42503be9f61cd927a2b4ddb0898ba&v=4" />
                            
                        ) : (
                            <>
                                <Menu>Home</Menu>
                    
                                <Button title="Cadastrar" variant="primary"/>
                                <Button title="Entrar" variant="primary"/>
                            </>
                        )
                    }
                </Row>
            </HeaderContainer>
        </Wrapper>
    )
}

export default Header