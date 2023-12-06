import React from "react";
import {
  StyledForm,
  StyledContainer,
  StyledLabel,
  DoubleInput,
  StyledSubmit,
} from "./CatalogFilters.styled";
import { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";

const CatalogFilters = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    async function fetchBrands() {
      const response = await axios.get(
        "https://6511877a829fa0248e404647.mockapi.io/api/brands"
      );
      setBrands(response.data);
    }
    fetchBrands();
  }, []);
  return (
    <StyledContainer>
      <StyledForm>
        <StyledLabel>
          Car brand
          <Select
            components={{
              IndicatorSeparator: () => null,
            }}
            placeholder={"Enter Text"}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                padding: "4px 18px",
                color: "#121417",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: 1.1,
                minWidth: 224,
                borderRadius: 14,
                marginTop: 8,
                background: "#F7F7FB",
                border: "none",
                borderColor: "none",
              }),
              placeholder: (base) => ({
                ...base,
                color: "111",
              }),
            }}
            options={brands}
          />
        </StyledLabel>
        <StyledLabel>
          Price/1hour
          <Select
            components={{
              IndicatorSeparator: () => null,
            }}
            placeholder={"To $"}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                padding: "4px 18px",
                color: "#121417",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: 1.1,
                minWidth: 125,
                borderRadius: 14,
                marginTop: 8,
                background: "#F7F7FB",
                border: "none",
                borderColor: "none",
              }),
              placeholder: (base) => ({
                ...base,
                color: "111",
              }),
            }}
            options={[1, 2, 3, 4, 5].map((el) => {
              return {
                value: 30 + 10 * el,
                label: `To ${30 + 10 * el}$`,
              };
            })}
          />
        </StyledLabel>
        <StyledLabel>
          Car mileage / km
          <DoubleInput>
            <input type="number" min={0} />
            <input type="number" min={0} />
          </DoubleInput>
        </StyledLabel>
        <StyledSubmit>Search</StyledSubmit>
      </StyledForm>
    </StyledContainer>
  );
};

export default CatalogFilters;
