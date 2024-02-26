import styled, { css } from 'styled-components'

export const ButtonContainer = styled.button`
    background-color: #565656;
    border-radius: 22px;
    position: relative;

    color: #fff;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    transition: .3s;
    border: none;
    margin-right: 5px;

    ${( {variant} ) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        background: #e41050;

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #e41050;
            top: -6px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }

        &:hover {
            box-shadow: 0 0 10px 5px #e41050;
            cursor: pointer;
        }
    `}
`