import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 274px;
  overflow: hidden;

  img {
    height: 268px;
    border-radius: 14px;
  }
`;

export const ImageContainer = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 274px;
  height: 268px;
  border-radius: 14px;
  position: relative;

  svg {
    position: absolute;
    top: 14px;
    right: 14px;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
  margin-bottom: 8px;
  p {
    margin: 0;
  }
`;

export const StyledHeading = styled.p`
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;

  span {
    color: #3470ff;
  }
`;

export const FeaturesText = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 28px;
  p {
    color: rgba(18, 20, 23, 0.5);

    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
    padding: 0 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.5);
  }

  p:last-of-type {
    border-right: none;
  }
`;

export const StyledButton = styled.button`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  border-radius: 12px;
  background: #3470ff;
  padding: 12px 99px;
  border: none;
  outline: none;
  transition: 1s background;

  &:hover {
    background: #0b44cd;
  }
`;
