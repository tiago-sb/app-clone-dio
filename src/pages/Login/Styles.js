import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 85px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  width: 370px;
  margin-bottom: 30px;
  line-height: 44px;
  color: #fff;
`

export const TitleLogin = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 20px;
  line-height: 44px;
  color: #fff;
`

export const SubTitleLogin = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 35px;
  line-height: 25px;
  color: #fff;    
`

export const EsqueciText = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 35px;
  line-height: 20px;

  color: #E5E044;
`

export const CriarText = styled.a`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 35px;
  line-height: 20px;
  cursor:  pointer;
  color: #e23dd7;
  transition: .5s;

  &:hover {
    text-shadow: 0 0 2rem #e26de8;
  }
`

export const Wrapper = styled.div`
  max-width: 300px;
  margin: 0 auto;
`

export const Column = styled.div`
  flex: 1;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

export const ErrorText = styled.p`
  color: red;
  font-size: 15px;
  margin: 20px 0;
`