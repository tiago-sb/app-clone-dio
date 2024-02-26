import styled from 'styled-components';

export const Container = styled.div`
    margin-left: 1rem;
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #fff;
    margin-right: 12px;
`

export const NameText = styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;

    color: #fff;
`

export const Progress = styled.div`
    width: 180px;
    height: 6px;
    background-color: #fff;
    border-radius: 3px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({percentual}) => percentual}%;
        height: 6px;
        border-radius: 3px;
        background-color: #23dd7a;
    }
`