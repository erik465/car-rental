import {
  StyledForm,
  StyledContainer,
  StyledLabel,
  DoubleInput,
  StyledSubmit,
} from "./CatalogFilters.styled";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { setCarsItems } from "../../redux/carsSlice";
import {
  selectBrands,
  selectCars,
  selectBrandFilter,
  selectPriceFilter,
  selectMileageMinFilter,
  selectMileageMaxFilter,
} from "../../redux/selectors";
import {
  setBrandFilter,
  setPriceFilter,
  setMileageMinFilter,
  setMileageMaxFilter,
} from "../../redux/filtersSlice";

const CatalogFilters = () => {
  const brands = useSelector(selectBrands);
  const dispatch = useDispatch();

  const cars = useSelector(selectCars);
  const brandFilter = useSelector(selectBrandFilter);

  const handleBrandChange = (selectedOption) => {
    dispatch(setBrandFilter(selectedOption.value));
  };

  const handlePriceChange = (selectedOption) => {
    dispatch(setPriceFilter(selectedOption.value));
  };
  const handleMileageMaxChange = (value) => {
    dispatch(setMileageMaxFilter(value));
  };
  const handleMileageMinChange = (value) => {
    dispatch(setMileageMinFilter(value));
  };

  const changeFilters = (e) => {
    //const priceFilter = useSelector(selectPriceFilter);
    //const brandFilter = useSelector(selectBrandFilter);
    //const brandFilter = useSelector(selectBrandFilter);
    e.preventDefault();
    console.log(brandFilter);
    const filteredItems = cars.filter((car) => car.make === brandFilter);
    console.log(filteredItems);
    dispatch(setCarsItems(filteredItems));
  };

  return (
    <StyledContainer>
      <StyledForm>
        <StyledLabel>
          Car brand
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
        </StyledLabel>
        <StyledLabel>
          Price/1hour
          <Select
            components={{
              IndicatorSeparator: () => null,
            }}
            onChange={handlePriceChange}
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
            <input
              type="number"
              min={0}
              onChange={(e) => handleMileageMinChange(e.target.value)}
            />
            <input
              type="number"
              min={0}
              onChange={(e) => handleMileageMaxChange(e.target.value)}
            />
          </DoubleInput>
        </StyledLabel>
        <StyledSubmit onClick={(e) => changeFilters(e)}>Search</StyledSubmit>
      </StyledForm>
    </StyledContainer>
  );
};

export default CatalogFilters;
