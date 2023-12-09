import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledContainer = styled.div`
  width: 1184px;
  margin: 0px auto;
`;

export const StyledHeading = styled.h2`
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
`;
