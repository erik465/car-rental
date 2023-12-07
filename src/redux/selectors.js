export const selectCars = (state) => state.cars.items;

export const selectPage = (state) => state.cars.page;

export const selectIsLastPage = (state) => state.cars.isLastPage;

export const selectBrands = (state) => state.filters.brands;

export const selectBrandFilter = (state) => state.filters.selectedBrand;

export const selectPriceFilter = (state) => state.filters.price;

export const selectMileageMinFilter = (state) => state.filters.mileage.from;

export const selectMileageMaxFilter = (state) => state.filters.mileage.to;
