import styled from "styled-components";

export const DetailedUserPhotos = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  align-self:center;
  align-content: center;
  grid-gap: 20px;
  margin: 10px auto 50px;
  @media screen and (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;