import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 55px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

export const Title = styled.h3`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  width: 320px;
  margin-bottom: 24px;
  line-height: 44px;
  color: #fff;
`

export const TitleHighLight = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 24px;
  line-height: 25px;
  color: #ffffff70;
`

export const Column = styled.div`
  flex: ${({ flex }) => flex};
  padding-right: 24px;
`

export const TextContent = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  width: 420px;
  margin-bottom: 20px;
  line-height: 30px;
  display: block;
  color: #fff;
`

