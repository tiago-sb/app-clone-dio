import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 100%;
    background-color: #3b4651;
    position: relative;
    margin-bottom: 24px;
    border-radius: 1rem;
`

export const ImageBackground = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 1rem 1rem 0 0;
`

export const Content = styled.div`
    width: 100%;
    padding: 12px;

    display: flex;
    flex-direction: column;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;

    div {
        margin-left: 12px;
    }

    h3 {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        
        color: #fff;
    }

    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        
        color: #fff;
    }
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #fff;
`

export const PostInfo = styled.div`
    margin-bottom: 12px;

    h3 {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        
        color: #fff;
    }

    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        
        color: #fff;
    }
`

export const MaisInfo = styled.div`
    margin-top: 12px;

    h3 {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        
        color: #ffffff80;
    }

    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        
        color: #fff;
    }
`