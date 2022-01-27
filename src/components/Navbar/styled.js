import styled from "styled-components";
import theme from "../../styles/theme";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: white;
  min-height: 70px;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  width: 100%;
  @media screen and (max-width: 830px) {
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const NavSet = styled(Link)`
  width: 100%;
  display: block;
  padding: 20px;
  align-self: center;
  align-items: center;
  color: ${theme.color.blue.A400};
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;