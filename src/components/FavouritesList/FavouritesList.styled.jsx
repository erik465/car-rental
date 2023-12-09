import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
  padding: 0;
`;
export const LoadMoreStyled = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: #3470ff;
  text-decoration: underline;
  transition: 1s color;
  margin-top: 100px;

  &:hover {
    color: #0b44cd;
  }
`;
