import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledContainer = styled.div`
  width: 1184px;
  margin: 0px auto;
`;

export const StyledHeading = styled.h1`
  span {
    color: blue;
  }
`;

export const StyledLink = styled(NavLink)`
  border-radius: 12px;
  background: #3470ff;
  display: inline-flex;
  padding: 12px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ImageContainer = styled.div`
  max-height: 700px;
  max-width: 100%;
  overflow: hidden;
  border: 5px solid #3470ff;
  border-radius: 30px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  transition: 1s;

  &:hover {
    transform: scale(2);
  }
`;
