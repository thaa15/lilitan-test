import styled from "styled-components";
import { Link } from "react-router-dom";

export const AllContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  grid-gap: 20px;
  margin: 40px auto;
  @media screen and (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const AllContentBorderItem = styled(Link)`
  display: block;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
`;

export const AllContentCreator = styled.div`
  display: flex;
  column-gap: 20px;
  margin-bottom: 10px;
`;
