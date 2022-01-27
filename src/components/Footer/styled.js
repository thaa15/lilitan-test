import styled from "styled-components";

export const Footers = styled.footer`
  min-height: 80px;
  width: 100%;
  padding: 30px 0;
  background-color: #333333;
`;

export const FooterPart = styled.div`
  display: flex;
  width: 85%;
  margin: 0 auto;
  align-self: center;
  align-items: center;
`;

export const FooterLogo = styled.img`
  display: block;
  width: 50px;
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    display: none;
  }
`;

export const FooterCPR = styled.div`
  margin-left: auto;
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    margin: 0 auto;
  }
`;
