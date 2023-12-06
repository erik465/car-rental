import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 1184px;
  margin: 150px auto;
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: #8a8a89;
  width: fit-content;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;
`;

export const StyledSubmit = styled.button`
  display: flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  outline: none;
  border: none;
`;

export const DoubleInput = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  flex-shrink: 0;
  margin-top: 8px;

  input {
    padding: 14px 24px;
    color: #121417;

    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.1;
    border: none;
    background-color: #f7f7fb;
    outline: none;
    width: 160px;
  }

  input:nth-child(1) {
    border-radius: 14px 0px 0px 14px;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
  }

  input:nth-child(2) {
    border-radius: 0px 14px 14px 0px;
  }
`;
