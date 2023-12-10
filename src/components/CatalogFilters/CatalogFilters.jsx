import {
  StyledForm,
  StyledContainer,
  StyledLabel,
  StyledSubmit,
} from "./CatalogFilters.styled";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { fetchFilteredCars } from "../../redux/operations";
import { selectBrands, selectBrandFilter } from "../../redux/selectors";
import { setBrandFilter } from "../../redux/filtersSlice";
import { Suspense } from "react";

const CatalogFilters = () => {
  const brands = useSelector(selectBrands);
  const dispatch = useDispatch();

  const brandFilter = useSelector(selectBrandFilter);

  const handleBrandChange = (selectedOption) => {
    dispatch(setBrandFilter(selectedOption.value));
  };

  const changeFilters = (e) => {
    e.preventDefault();
    dispatch(
      fetchFilteredCars({
        page: 1,
        limit: 12,
        make: brandFilter,
      })
    );
  };

  return (
    <StyledContainer>
      <StyledForm>
        <StyledLabel>
          Car brand
          <Suspense>
            <Select
              onChange={handleBrandChange}
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
          </Suspense>
        </StyledLabel>

        <StyledSubmit onClick={(e) => changeFilters(e)}>Search</StyledSubmit>
      </StyledForm>
    </StyledContainer>
  );
};

export default CatalogFilters;
