import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 47px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 6rem;
`

export const Spacing = styled.div`
  margin: 10px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  algin-items: center;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  algin-items: center;
`

export const Wrapper = styled.div`
  background-color: #151515;
  width: 100%;
  height: 47px;
  
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BuscarInputContainer = styled.div`
  width: 175px;
  height: 30px;
  background-color: #2D2D37;
  border-radius: 8px;
  padding: 2px 5px;
  margin: 0 12px;

  display: flex;
  align-items: center;
`

export const Menu = styled.a`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-size: 16px;
  line-height: 25px;
  color: #fff;
  margin-right: 12px;
  text-decoration: none;
  cursor: pointer;
`

export const MenuRight = styled.a`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-size: 12px;
  line-height: 25px;
  color: #fff;
  margin-rigth: 12px;
  text-decoration: none;
`

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 22px;
  border: 2px solid #fff;
`

export const Picture = styled.img`
  width: 60px;
  height: 25px;
  cursor: pointer;
`

export const Input = styled.input`
  background-color: transparent;
  flex: 1;
  border: 0;
  color: #fff;
`