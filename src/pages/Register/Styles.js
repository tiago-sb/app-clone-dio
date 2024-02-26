import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 5rem;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
`

export const Column = styled.div`
    flex: 1;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 370px;
    line-height: 44px;
    color: #fff;
`

export const SubTitle = styled.p`
    margin: 1rem 0;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    width: 370px;
    line-height: 23px;
    color: #fff;
`
export const Wrapper = styled.div`
    max-width: 300px;
    margin: 0 auto;
`

export const TextNormal = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    width: 370px;
    line-height: 23px;
    color: #fff;
    display: inline;
`

export const TextNormalLogin = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #9eee99;
    display: inline;
    margin-left: 5px;
    cursor: pointer;
`